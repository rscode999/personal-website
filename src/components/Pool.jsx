import React from 'react';

import './Pool.css';

/**
 * Renders a list of items inside a box. Has no children.
 * @param title header for the box
 * @param items items to render inside
 */
export default function pool({ title = "Pool", items = ['item'] }) {
    return (
        <div className="pool">
            <h3>{title}</h3>
            <div className="pool-flex">
            {items.map((skill, index) => (
                <span key={index} className="pool-badge">{skill}</span>
            ))}
            </div>
        </div>
    );
}