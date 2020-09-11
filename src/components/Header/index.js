import React from 'react'
import './header.css'
import {Avatar} from '@material-ui/core'
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
const index = () => {
    return (
        <div className = "header">
           
        <img className= "logo" alt="" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"/>
       
       <div className = "center">
       <input type = "text"/>
       <SearchIcon/>
       </div>
       <div className = "right">
       <p>Become a host</p>
       <TranslateIcon/>
       <ExpandMoreIcon/>
       <Avatar/>
       </div>
        </div>
    )
}

export default index
