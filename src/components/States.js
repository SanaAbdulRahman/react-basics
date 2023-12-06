import React from 'react'

const States = ({ states }) => {
    return (
        <div>
            {states.map((state) => (
                < div >
                    <h1> State : {state.name}</h1>
                    <h4> Language : {state.language}</h4>
                    <h4> population : {state.population}</h4>
                </div >
            ))}

        </div >
    );
};

export default States;