import React from 'react';

import './Pool.css';

/**
 * Renders a list of items inside a box. Has no children.
 * @param title header for the box
 * @param items items to render inside
 * @param style custom styles for this pbject
 */
export default function Pool({ title = "Pool", items = ['item'], style = {} }) {
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