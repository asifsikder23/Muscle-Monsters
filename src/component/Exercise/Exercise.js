import React from 'react';

const Exercise = (props) => {
    const{img, name, description, age, time} = props.exercise;
    const {addToList} =props;
    return (
        <>
            <div className="col">
                        <div className="card">
                            <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                                <p className='fw-bold pt-3'>Age: {age} </p>
                                <p className='fw-bold'>Time: {time} </p>
                            
                            <div className="d-flex justify-content-center">
                                <button onClick={()=>addToList(props.exercise)} type="button" className="btn btn-primary px-5">Add to List</button>
                            </div>
                            </div>
                        </div>
            </div>
        </>
    );
};

export default Exercise;