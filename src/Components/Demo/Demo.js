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
import openhat from "./sounds/openhat.wav";
import { Howler, Howl } from "howler";

function Demo() {
  const audioClips = [
    { sound: boom, label: "Boom", key: "A" },
    { sound: clap, label: "Clap", key: "S" },
    { sound: hihat, label: "Hi-hat", key: "D" },
    { sound: kick, label: "Kick", key: "F" },
    { sound: openhat, label: "Openhat", key: "G" },
    { sound: ride, label: "Ride", key: "H" },
    { sound: snare, label: "Snare", key: "J" },
    { sound: tom, label: "Tom", key: "K" },
    { sound: tink, label: "Tink", key: "L" },
  ];

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  Howler.volume(1);

  const RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button
          className="key"
          key={index}
          onClick={() => soundPlay(soundObj.sound)}
        >
          <h2>{soundObj.key}</h2>
          <span>{soundObj.label}</span>
        </button>
      );
    });
  };

  const handleKeyPress = useCallback((event) => {
    const { keyCode } = event;
    console.log(keyCode);

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
  }, []);

  useEffect(() => {
    
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      
    };
  }, [handleKeyPress]);

  function removeTransition(e) {
    if (e.propertyName !== "transform") {
      this.classList.remove(".playing");
    }
  }

  const keys = document.querySelectorAll(".key");

  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition())
  );

  return (
    <>
      <audio className="key" data-key="65" src={clap} />
      <audio className="key" data-key="83" src={hihat} />
      <audio className="key" data-key="68" src={kick} />
      <audio className="key" data-key="70" src={openhat} />
      <audio className="key" data-key="71" src={boom} />
      <audio className="key" data-key="72" src={ride} />
      <audio className="key" data-key="74" src={snare} />
      <audio className="key" data-key="75" src={tom} />
      <audio className="key" data-key="76" src={tink} />

      <div className="containerDemo">
        <div className="displayContainer">{RenderButtonAndSound()}</div>
      </div>
    </>
  );
}

export default Demo;
