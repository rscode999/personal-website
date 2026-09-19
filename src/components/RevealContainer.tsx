import React, {useState, useEffect, useRef} from 'react';


interface RevealContainerProps {
    children?: any,
    delay?: number
}

function assertPositive(val: number): asserts val is number {
  if (typeof val !== "number") throw new Error("Value must be a number");
  if (val < 0) throw new Error("Value must be positive");
}

/**
 * Upon rendering, a RevealContainer will show each child inside in sequence from top to bottom,
 * with a `delay` (integer, positive) millisecond delay between each item's appearance.
 * 
 * Default delay: 150ms
 */
export default function RevealContainer({ children, delay = 150 }: RevealContainerProps): React.JSX.Element {
    assertPositive(delay);

    const [visibleCount, setVisibleCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const containerRef = useRef(null);

    //Observe when the element enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect(); // Stop observing once it's triggered
                }
            },
            { threshold: 0.1 } // Triggers when 10% of the component is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    //Sequential logic starts only after hasStarted is true
    useEffect(() => {
        if (!hasStarted) return;

        const childrenArray = React.Children.toArray(children);
        if (visibleCount < childrenArray.length) {
            const timer = setTimeout(() => {
                setVisibleCount((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [visibleCount, hasStarted, children, delay]);

    return (
        <div ref={containerRef}>
            {React.Children.map(children, (child, index) => {
                const isVisible = index < visibleCount;
                return (
                    <div
                        key={index}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: `all 0.6s ease-out`,
                            marginBottom: '1rem'
                        }}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    );
};