import React, { useState, useEffect } from 'react';

export default function CounterFunction() {
    useEffect(()=>{
        alert("useEffect: functional state atualizado");
    });

    const [value, setValue] = useState(0);

    function add() {
        setValue(value+1);
    }
    return (
        <div>
            <p>{value}</p>
            <button onClick={add} className="btn">Add</button>
        </div>
    );
}