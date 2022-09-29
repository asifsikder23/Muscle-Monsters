import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Timer from '../Timer/Timer';


const Workout = () => {
    const [Workout, setWorkout] = useState([]);

    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setWorkout(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="row row-cols-1 row-cols-md-3 g-3 ">
                            {Workout.map(exercise=> <Exercise
                            key={exercise.key}
                            exercise={exercise}
                            ></Exercise>)}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4 mt-md-0">
                        <Timer></Timer>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Workout;