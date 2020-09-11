import React,{useState} from 'react'
import './wideshow.css'
import {Button} from '@material-ui/core'
import Search from '../Search'
const Wideshow = () => {

    const [showSearch,setShowSearch] = useState(false)

    return (
        <div className = "wideshow">
        <div className = "search">
        {showSearch && <Search/>}
        <Button 
        className = "search_button"
        onClick = {()=>setShowSearch(!showSearch)} 
        variant = "outlined">{
            showSearch ?
            <span>Hide</span>            
            :

            <span>Search Dates</span>
        }</Button>
        </div>
        <div className = "heading">
        <h1>Explore the world! Enjoy the life!</h1>
        <h4>Plan a different kind of gateway to uncover the hidden gems near you</h4>
        <Button variant = "outlined">Explore Nearby</Button>
        </div>
           
        </div>
    )
}

export default Wideshow
