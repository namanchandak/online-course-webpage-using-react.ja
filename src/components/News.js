import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  

  
  

  render() {
    return (

          



          <div className="container ">
            <div className="row">
              <div className="col-sm border-0 "><NewsItem title="Speacking clubs" description="In our school you will practice your speaking skills and just get a lot of positive emotions!" newsUrl="to do" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/221220181529-musk-world-cup-final-1218.jpg?c=16x9&q=w_800,c_fill"/></div>
              <div className="col-sm border-0" ><NewsItem title="Quality control" description= "A huge work has been done with the teachers and their work has been monitored thoroughly. " newsUrl="to do"/></div>
              <div className="col-sm"><NewsItem title="Progress analysis" description= "The CEF of Reference has been used at our school. It allows to control our students’ success in studying." newsUrl="to do"/></div>
              
            </div>


          


          </div>


    );
  }
}

export default News;
