// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {
     
  
//     constructor() {
//         super();
//         console.log("hello from news");
//         this.state =
//         {
//             articles: [],
//             loading: false,
//             page:1
//         }
//     }
//     async componentDidMount()
//     {
//         console.log("cdm");
//         let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d2596691f6b44e50a97b2015b61eeb01&page=1&pagesize=10";
//         let data=await fetch(url);
//         let parsedData=await data.json();
//         console.log(parsedData);
//         this.setState({
//             page:this.state.page,articles:parsedData.articles})
//     }
//     handlePrev=async()=>{
//         console.log("prev");
//         let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=d2596691f6b44e50a97b2015b61eeb01&page=${this.state.page-1}&pagesize=10';
//         let data=await fetch(url); 
//         let parsedData=await data.json();
//         console.log(parsedData);
//         this.setState({
//             page:this.state.page-1,
//             articles:parsedData.articles})

//     }
//     handleNext=async()=>{
//         console.log("next");
//         let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=d2596691f6b44e50a97b2015b61eeb01&page=${this.state.page+1}&pagesize=10';
//         let data=await fetch(url); 
//         let parsedData=await data.json();
//         console.log(parsedData);
//         this.setState({
//             page:this.state.page+1,
//             articles:parsedData.articles})
        
//     }
//     render() {
//         return (
//             <div className="container my-3  " >
//                 <h1 style={{textAlign:"center"}}>Aaj ki taaza khabar</h1>
                
//                 <div className="row">
//                 {this.state.articles.map((element)=>{
//                    return( <div className="col-md-4" key={element.url}>
//                         <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} />
//                     </div>)
//                     })}

//                 </div>
//               <div className='container d-flex justify-content-between'>
//               <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}>Prev</button>
//               <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
//               </div>
//             </div>
//         )
//     }
// }

// export default News
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
     
  
    constructor() {
        super();
        console.log("hello from news");
        this.state =
        {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount()
    {
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d2596691f6b44e50a97b2015b61eeb01&page=1&pagesize=10";
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            page:this.state.page,articles:parsedData.articles})
    }
    handlePrev=async()=>{
        console.log("prev");
        let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=d2596691f6b44e50a97b2015b61eeb01&page=${this.state.page-1}&pagesize=10';
        let data=await fetch(url); 
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles})

    }
    handleNext=async()=>{
        console.log("next");
        let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=d2596691f6b44e50a97b2015b61eeb01&page=${this.state.page+1}&pagesize=10';
        let data=await fetch(url); 
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles})
        
    }
    render() {
        return (
            <div className="container my-3  " >
                <h1 style={{textAlign:"center"}}>Aaj ki taaza khabar</h1>
                
                <div className="row">
                {this.state.articles.map((element)=>{
                   return( <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} />
                    </div>)
                    })}

                </div>
              <div className='container d-flex justify-content-between'>
              <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}>Prev</button>
              <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
              </div>
            </div>
        )
    }
}

export default News
