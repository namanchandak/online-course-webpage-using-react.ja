import React, { Component } from 'react'

export class Cardlesson extends Component {
  render() {
    return (
      <div>

<div className="card border-0  mx-5" style={{backgroundColor:"#524FD5", color: "black" ,width: "18rem",  float: 'right'}} >
  <div className="card-body">
    
    <h5 className="card-title">How the first lesson with teacher will be?</h5>
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <button type="button" style={{backgroundColor :"white", color:"black",width: "20px" ,height: "20px"}} className="btn btn-info">{"-"}</button>
    <p className="card-text">By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.</p>
    {/* <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a> */}
  </div>
</div>
        


      </div>
    )
  }
}

export default Cardlesson