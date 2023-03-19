import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';
import axios from "axios"

import {Grid} from "@material-ui/core"
import {SearchBar} from "./components/SearchBar"
import {VideoList} from "./components/VideoList"
import { VideoDetail} from './components/VideoDetail';

import youtube from './api/Youtube';


/* Commands to create app
   1. npm install
   2. npx create-react-app youtube 
       or
      npx create-react-app ./
   3. npm i --save axios @material-ui/core
 */  

  /* 
  How to deploy
  1. firebase init
  2. npm run build
  3. firebase deploy*/

const App= ()=>{
  
    const [videos, setVideos] = useState([])
    const [ selectedVideo, setSelectedVideo ]= useState({id: {}, snippet: {}})
  

    async function handleSubmit( searchTerm ) {
   /* config["params"] ={...config["params"], q:searchTerm}
    const response= await axios.get("/search",config)
    console.log(response)

   */

    const { data: {items: videos}} = await youtube.get("search", {
      params:{
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC2kRMyMhVWj7n1I-PHTjD_pgvq3gAU7Wo",
        q: searchTerm,
      }
      })

      setVideos(videos);
      setSelectedVideo(videos[0])
    }
   
    return(
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
            <Grid item xs={4}>
              {/* Video List */}
              <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
            </Grid>
          </Grid>
       </Grid>
      </Grid>
    )
  
};

export default App;