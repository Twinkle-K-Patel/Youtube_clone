import React, { useState } from "react"
import {Paper, TextField} from "@material-ui/core"

export const SearchBar =({onSubmit})=>{
    const [searchTerm, setSearchTerm] =useState("");

    const onKeyPress =(event)=>{
        if(event.key ==="Enter"){
            onSubmit(searchTerm)
        }
    }


    const handleChange=(event)=>{
         setSearchTerm(event.target.value)
    }
    
    return(
        <Paper elevation={6} style={{padding: "25px"}}>
                <TextField 
                fullWidth 
                label="Search..." 
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={onKeyPress}></TextField>
           
        </Paper>
    )
 }

