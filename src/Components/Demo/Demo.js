import React, { useEffect, useCallback } from "react";
import "./Demo.css";
import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tom from "./sounds/tom.wav";
import tink from "./sounds/tink.wav";
import { Howler, Howl } from "howler";

//     <audio data-key="65" src="./sounds/clap.wav" />
//     <audio data-key="83" src="./sounds/hihat.wav" />
//     <audio data-key="68" src="./sounds/kick.wav" />
//     <audio data-key="70" src="./sounds/openhat.wav" />
//     <audio data-key="71" src="./sounds/boom.wav" />
//     <audio data-key="72" src="./sounds/ride.wav" />
//     <audio data-key="74" src="./sounds/snare.wav" />
//     <audio data-key="75" src="./sounds/tom.wav" />
//     <audio data-key="76" src="./sounds/tink.wav" />


function Demo() {

  const audioClips = [
    { sound: boom, label: "boom" },
    { sound: clap, label: "clap" },
    { sound: hihat, label: "hi-hat" },
    { sound: kick, label: "kick" },
    { sound: ride, label: "ride" },
    { sound: snare, label: "snare" },
    { sound: tom, label: "tom" },
    { sound: tink, label: "tink" },
  ];

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true
    })
    sound.play();
  }

  Howler.volume(0.5);

  const RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => soundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      );
    });
  };
  
  const handleKeyPress = useCallback((event) => {
    const newSound = new Howl({
      src: ['./sounds/boom.wav'],
      html5: true
    })

    const { key, keyCode } = event;
    
    console.log(event, key, keyCode)
    
    switch (keyCode) {
      case 65:
        console.log("A");
        newSound.play();
        soundPlay([audioClips.sound])   
        break;
      case 83:
        console.log("S");
        break;
      case 68:
        console.log("D");
        break;
      case 70:
        console.log("F");
        break;
      case 71:
        console.log("G");
        break;
      case 72:
        console.log("H");
        break;
      case 74:
        console.log("J");
        break;
      case 75:
        console.log("K");
        break;
      case 76:
        console.log("L");
        break;

      default:
        break;
    }
  }, [audioClips]);

  
  useEffect(() => {
    
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return <>

    <div className="containerDemo">
      <div className="displayContainer">
      {RenderButtonAndSound()}
      </div>
    </div>
    </>;
}

export default Demo;
