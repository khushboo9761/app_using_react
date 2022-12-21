import React from "react";
import './App.css';

export default function Task({taskName,time}) {
    return (
        <div className="task">
        <h1>TaskName: {'\n'}{taskName} </h1>
        
        <h1>{'\n'}Time To Complete:{'\n'} {time} </h1>
        
        </div>
    );
}

    