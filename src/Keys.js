import React from "react";
import * as Tone from "tone";

function Keys(props) {
  const synth = new Tone.Synth().toMaster();

  function playNote(note) {
    synth.triggerAttackRelease(note, "8n");
  }
  return props.notes.map((note) => {
    return <button onClick={() => playNote(note)}>{note}</button>;
  });
}

export default Keys;
