import React, { Component } from 'react'

export class NewsItem extends Component {

render() {

    


    let {title,description}= this.props;

    return (



        


      <div className='my-6'>



      



                <div className="card border-0" style={{width: "18rem"}}>
                {/* <img src={imageUrl} className="card-img-top" alt="..."/> */}
                <div className="card-body border-0">
                <h5 className="card-title border-0"> {title}</h5>
                <p className="card-text">{description}</p>
                {/* <a href="/newsDetail/newsDetail/" className="btn btn-sm btn-primary">know more</a> */}
                </div>
                </div>

      </div>
    )
  }
}

export default NewsItem