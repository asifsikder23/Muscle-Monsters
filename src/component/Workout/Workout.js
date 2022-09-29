import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Timer from '../Timer/Timer';


const Workout = () => {
    const [Workout, setWorkout] = useState([]);
    const [time, setTime]= useState(0);
    const addToList=(exercise)=>{
        setTime(parseInt(time) + parseInt(exercise.time))
    }

    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setWorkout(data))
    },[])
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="row row-cols-1 row-cols-md-3 g-3 ">

                            {Workout.map(exercise=> <Exercise
                            key={exercise.key}
                            exercise={exercise}
                            addToList={addToList}
                            ></Exercise>)}

                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4 mt-md-0 sticky-top">
                        <Timer time={time}></Timer>
                    </div>


                    <h1 className='text-center p-5'>Questions</h1>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How does react work?
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Difference between props and state?
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

                                Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How many uses of useEffect without API ?
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            If we pass dependencies to useEffect hook, then useEffect will executed every time when the variables which we passed to dependency array . We should useEffect, when your component depends on the outside world data, and we can not guarantee that data will come or not (maybe the server is down there). So, Instead of throwing errors and stop other components from being rendered, move them into useEffect hook. If we pass an empty array to useEffect then our component will be rendered for first time when a component is rendered. To re-call useEffect hook we have to refresh our page. With useEffect, you can handle lifecycle events directly inside function components. Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount
                            </div>
                            </div>
                        </div>
                        </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Workout;