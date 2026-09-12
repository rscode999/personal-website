import { useState, useEffect } from 'react';

export default function Projects() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Projects";
    });

    return (
        <div>
            <p>PROJECTS PAGE</p>
        </div>
    );
}