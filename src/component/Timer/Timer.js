import React, {useState} from 'react';
import '../Timer/Timer.css'
import Swal from 'sweetalert2'

const Timer = ({time}) => {
    const handleAlert= ()=>{
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }
    const [timer, setTimer] = useState(0);
    const break10s = (time) => setTimer(time)
    const break20s = (time) => setTimer(time)
    const break30s = (time) => setTimer(time)
    const break40s = (time) => setTimer(time)
    const break50s = (time) => setTimer(time)

    return (
            <div className="card pt-3 card-img">
        <div className="d-flex gap-2 ms-4 align-items-center">
            <img className="card-img-top rounded-5 w-25 " src="https://scontent.fdac145-1.fna.fbcdn.net/v/t39.30808-6/274233181_3085646058375783_6690705659848583132_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZO-M8LAQG3MAX9w4ryc&_nc_ht=scontent.fdac145-1.fna&oh=00_AT8yyWdRXFlxc1_MnpeUMDFepVQ92Ec_MjIRt3RXCxalzQ&oe=63398D2D" alt="..."/>
            <div>
                <p className='fw-bold'>Md. Asif Ullah Sikder</p>
                <p><i className="fa-solid fa-map-location-dot pe-2"></i> Dhaka,Bangladesh</p>
            </div>
        </div>
        <div className="d-flex justify-content-center gap-5 pt-4">
            <div>
                <div className="d-flex">
                    <h5>55</h5><small>kg</small>
                </div>
                <div>
                    <p className="fw-bold">Weight</p>
                </div>
            </div>
            <div>
                <div className="d-flex">
                    <h5>6.5</h5>
                </div>
                <div>
                    <p className="fw-bold">Height</p>
                </div>
            </div>
            <div>
                <div className="d-flex">
                    <h5>25</h5><small>yrs</small>
                </div>
                <div>
                    <p className="fw-bold">Age</p>
                </div>
            </div>
        </div>
        <div className="card-body">
          <h5>Add a Break</h5>
          <div className="d-flex justify-content-center gap-3 py-2 align-items-center text">
            <button onClick={()=>break10s(10)} className="button break-time ">10s</button>
            <button onClick={()=>break20s(20)} className="button break-time ">20s</button>
            <button onClick={()=>break30s(30)} className="button break-time ">30s</button>
            <button onClick={()=>break40s(40)} className="button break-time ">40s</button>
            <button onClick={()=>break50s(50)} className="button break-time ">50s</button>
            
          </div>

          <h4>Exercise Details</h4>
          <div>
            <div className="d-flex gap-5 pt-3">
                <h5>Exercise Time </h5> <span> {time} Sec </span>
            </div>
            <div className="d-flex gap-5 pt-3">
                <h5>Break Time </h5> <span> {timer} </span>
            </div>
            
          <div className="d-flex justify-content-center py-2">
            <a onClick={handleAlert} href="#" className="btn btn-primary w-100">Activity Completed</a>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Timer;