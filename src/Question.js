import React, { Component } from 'react'

export class Question extends Component {
  render() {
    return (
        <div>



      <div class="container">
      <div class="row">
        <div class="col-sm">
        <li className="list-group-item border-0 ">How can I know my level of knowledge?</li>
                <button type="button" style={{backgroundColor :"#83A3FC", color:"white",width: "30px" ,height: "30px"}} className="btn btn-info">{"+"}</button>
        </div>

        <li className="list-group-item border-0 " style={{textAling: 'right'}}>Can I do it individually or only in a group?</li>
                <button type="button "  style={{backgroundColor :"#83A3FC", color:"white" ,width: "30px" ,height: "30px"}} className="btn btn-info">{"+"}</button>
        
                <li className="list-group-item border-0 " >What is the maximum group size?</li>
                <button type="button" style={{backgroundColor :"#83A3FC", color:"white",width: "30px" ,height: "30px"}} className="btn btn-info">{"+"}</button>
        
        <div class="col-sm">
          
        </div>
        <div class="col-sm">
        <li className="list-group-item border-0 " style={{textAling: 'right'}}>Do I need to buy materials for lessons?</li>
                <button type="button"  style={{backgroundColor :"#83A3FC", color:"white",width: "30px" ,height: "30px"}} className="btn btn-info">{"+"}</button>


               <li className="list-group-item border-0 style={{textAling: 'right'}} ">Are you adjusting to the student's schedule?</li>
                <button type="button my-2" style={{backgroundColor :"#83A3FC", color:"white",width: "30px" ,height: "30px"}} className="btn btn-info">{"+"}</button>
 
        </div>

        
      </div>
    </div>





    







      

      </div>
    )
  }
}

export default Question