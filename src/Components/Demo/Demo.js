import React from "react";
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
import { Container } from "react-bootstrap";

function Demo() {
  const audioClips = [
    { sound: boom, label: "Boom", key: "A", code: 65 },
    { sound: clap, label: "Clap", key: "S", code: 83 },
    { sound: hihat, label: "Hi-hat", key: "D", code: 68 },
    { sound: kick, label: "Kick", key: "F", code: 70 },
    { sound: openhat, label: "Openhat", key: "G", code: 71 },
    { sound: ride, label: "Ride", key: "H", code: 72 },
    { sound: snare, label: "Snare", key: "J", code: 74 },
    { sound: tom, label: "Tom", key: "K", code: 75 },
    { sound: tink, label: "Tink", key: "L", code: 76 },
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
        <div data-aos="flip-right" data-aos-duration="1800" className="key" data-key={soundObj.code} key={index} onClick={() => soundPlay(soundObj.sound)}>
          <div data-aos-duration="1800" data-aos="fade-down" data-aos-delay="400">
          <h2>{soundObj.key}</h2>
          <span>{soundObj.label}</span>
          </div>
        </div>
      );
    });
  };


  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio || e.repeat) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function toggleClass(e){
     
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (key === null) return;
    setTimeout(function(){
          key.classList.remove('playing');

    },150)
 }

  window.addEventListener('keydown', playSound); 
  window.addEventListener('keyup', toggleClass);

  return (
    <>
      <audio data-key="65" src={boom}className="p"  />
      <audio data-key="83" src={clap} />
      <audio data-key="68" src={hihat} />
      <audio data-key="70" src={kick} />
      <audio data-key="71" src={openhat} />
      <audio data-key="72" src={ride} />
      <audio data-key="74" src={snare} />
      <audio data-key="75" src={tom} />
      <audio data-key="76" src={tink} />

      <Container fluid className="containerDemo">
        <div className="displayContainer">{RenderButtonAndSound()}</div>
      </Container>
    </>
  );
}

export default Demo;
