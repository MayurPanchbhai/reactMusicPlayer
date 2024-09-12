import { useContext } from "react"
import { PlayPauseContext } from "./MyContext"

export const Home = () =>{

    

    const {playing , handlePlayPause ,currSong,handleNext ,handlePrev ,list } = useContext(PlayPauseContext);


    

    return (
        <div className="flex flex-col bg-red-800 w-3/12 items-center p-3 gap-3">
            <div className="w-[200px] h-[200px]">
                <div className="h-[200px] w-[200px] bg-black flex justify-center items-center">
                    <div className="h-[190px] w-[190px] flex justify-center items-center rounded-full bg-black">
                        <img src="public\vite.svg" alt="" className={playing?"animate-spin ":""} />
                    </div>
                </div>
            </div>
            <div>
                {/* <audio src={list[currSong].source} controls autoPlay  /> */}
            </div>
            <div className="flex justify-center p-2">
                <button  className="p-5 bg-white mx-2 text-black rounded-full " onClick={handlePrev}>Pre</button>

                <button onClick={handlePlayPause} className="px-3 bg-white mx-2 text-black rounded-full w-[70px]">{playing ?"Pause":"Play"}</button>

                <button className="p-5 bg-white mx-2 text-black rounded-full" onClick={handleNext}>Far</button>
            </div>
        </div>
    )
}
