import './Pool.css';


interface PoolProps {
  title?: string;
  items?: string[];
  style?: object;
}

/**
 * Box with the title `title` (string), items `items` (list of strings), and the external styles `style` (object).
 * 
 * Has no children.
 */
export default function Pool({ title = "Pool", items = ['item'], style = {} }: PoolProps): React.JSX.Element {
    return (
        <div className="pool" style={style}>
            <h3>{title}</h3>
            <div className="pool-flex">
            {items.map((skill, index) => (
                <span key={index} className="pool-badge">{skill}</span>
            ))}
            </div>
        </div>
    );
}