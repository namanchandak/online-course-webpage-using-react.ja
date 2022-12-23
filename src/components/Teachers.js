
import React, { Component } from 'react'

export class Teachers extends Component {
  

    
  render() {

    let {name,country,imageurl,imagec}= this.props;


    return (
      <div>
        
        <div className="card border-0" style={{width: "18rem"}}>
                <img src={imageurl} className="card-img-top" alt="..."/>
                <div className="card-body border-0">
                <h5 className="card-title border-0"> {name}</h5>
                <img rounded="true" width={"20px"} style={{width: "15px",height: "15px"}}  src={imagec} className="card-img-top" alt="..."/><p className="card-text">{country}</p>
                {/* <a href="/newsDetail/newsDetail/" className="btn btn-sm btn-primary">know more</a> */}
                </div>
                </div>


      </div>
    )
  }
}

export default Teachers