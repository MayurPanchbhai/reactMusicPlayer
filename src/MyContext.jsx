import {createContext, useEffect, useState } from "react";

export const PlayPauseContext = createContext();

export const PlayPauseProvider = ({children}) =>{

    const list = [
        {
            name:"Rockstar",
            source:"../public/Tracks/Rockstar Made (Slowed + Reverb).mp3"
        },
        {
            name:"Rockstar",
            source:"../public/Tracks/Queen of Pain (Slowed)(MP3_320K).mp3"
        },
        {
            name:"Rockstar",
            source:"../public/Tracks/RITMADINHA DANÇANTE - DJ GUDOG (BRAZILIAN PHONK)(MP3_320K).mp3"
        },
        {
            name:"Rockstar",
            source:"../public/Tracks/run run run (slowed   reverb)(MP3_320K).mp3"
        },
    ];

    // play and pause state variable  
    const [playing ,setPlaying] = useState(false);
    //Index of the song
    const [currSong , setCurrSong] =useState(0);
    // audio for rendering the new audio
    const [audio , setAudio]=useState(null);

    useEffect(()=>{
        const newAudio = new Audio(list[currSong].source);
        setAudio(newAudio)//this function will save the new song in the audio
        // cleanup function 
        if(playing){
            newAudio.play();
            // console.log(newAudio);
            
        }

        return() =>{
            // newAudio.pause();
            newAudio.currentTime = 0;
        }
    },[currSong]);


    // updating the index of the song 
    const handleNext = () =>{
        if(list.length -1 > currSong){
            setCurrSong(currSong+1);
        }else{
            setCurrSong(0);
        }
    }

    const handlePrev = () =>{
        if(currSong > 0){
            setCurrSong(currSong-1);
        }else{
            setCurrSong(list.length - 1);
        }
    }


    
     //  play and pause functionlity
     function handlePlayPause() {
        if(playing){
            // console.log("playing");
            audio.pause();
        }else{
            audio.play();
        }
        setPlaying(!playing); 
    }

    return(
        <PlayPauseContext.Provider value={{playing , handlePlayPause , list ,currSong , handleNext ,handlePrev ,audio}} >{children}</PlayPauseContext.Provider>
    )
}