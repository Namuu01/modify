import { useState} from "react";
import axios from "axios";
import "./App.css";
function App(){
    const[text,setText]=useState("Sanjith Hegde");
    const[video,setVideo]=useState([]);

    const getVideo=async()=>{
      const res = await axios.post("https://modify-pr6y.onrender.com/mood",{text:text})
      setVideo(res.data);
    };

    return(
      <div className="App">
        <h1> Mood based song recommender</h1>
        <input placeholder="How is your Mood today?"
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={getVideo}>Predict </button>
      <div className="video">
        {video.map(v=>(
          <iframe width="815" 
          key={v.id.videoId}
          height="458"
           src={`https://www.youtube.com/embed/${v.id.videoId}`} 
           title="video"
           />
        ))}
      </div>

      </div>
    )
  }

  export default App;
