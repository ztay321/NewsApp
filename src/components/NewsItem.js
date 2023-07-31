// import React, { Component } from 'react'

// export class NewsItem extends Component {
  
 
//   render() {
//     let {title,description,imgurl,newsurl}=this.props;
//     return ( 
//       <div className='my-3'>
//        <div className="card" style={{width: "18rem" ,height:"fit-content"}}>
//   <img src={imgurl} className="card-img-top" alt="..."></img>
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{description}</p>
//     <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Check out full article</a>
//   </div>
// </div>
//       </div>
//     )
//   }
// }

// export default NewsItem
import React, { Component } from 'react'

export class NewsItem extends Component {
  
 
  render() {
    let {title,description,imgurl,newsurl}=this.props;
    return ( 
      <div className='my-3'>
       <div className="card" style={{width: "18rem" ,height:"fit-content"}}>
  <img src={imgurl} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Check out full article</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem