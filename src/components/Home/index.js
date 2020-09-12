import React,{useState,useEffect} from 'react'
import WideShow from './WideShow'
import './main.css'
import data from './card-data'
import data2 from './card-data-2'
import Card from './Card'
const Home = () => {


    useEffect(()=>{

        
    },[])

    return (
        <div className = 'home'>
        <WideShow/>
        <div className= "section">
  {
      data.map((el)=>{
          return <Card title = {el.title} src= {el.src} description = {el.description} />
      })
  }
        </div>
        <div className= "section">
        {
            data2.map((el)=>{
                return <Card title = {el.title} src= {el.src} description = {el.description} price = {el.price}/>
            })
        }
        </div>
       
            </div>
    )
}

export default Home


// <Card title = {data[0].title} src= {data[0].src} description = {data[0].description}/>
// <Card title = {data[1].title} src= {data[1].src} description = {data[1].description}/>
// <Card title = {data[2].title} src= {data[2].src} description = {data[2].description}/>
