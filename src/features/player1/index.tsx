import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../actions/gridActions";

const Player1 = () => {
  const dispatch: any = useDispatch();

  const grid = useSelector((state: any) => state.gridReducer.grid);
  const updated = useSelector((state: any) => state.gridReducer.updated);

  const [randNumber, setRandNumber] = useState(0);
  const handleChange = (event: any) => {
    setRandNumber(event.target.value);
  };
  const shuffle = (array: string[]) => {
    const rand: number = Math.floor(Math.random() * (array.length - 1));
    setRandNumber(rand);
    grid.map((row: any) => {
      row &&
        row.map((phrases: any) => {
          if (phrases.id === randNumber) {
            dispatch(changeValue(grid, !updated, phrases.row, phrases.col));
            var index = array.indexOf(phrases.value);
            console.log(index);
            if (index > -1) {
              array.splice(index, 1);
            }
            console.log(array);
          }
        });
    });
  };
  return (
    <>
      <div className="flex">
        <h3>Player 1</h3>
        <button
          onClick={() => shuffle(phrases)}
          className="bg-white white pa3 bw1"
        >
          Play
        </button>
      </div>
      <div onChange={handleChange}>{randNumber}</div>
    </>
  );
};

export default Player1;

let phrases = [
  "Sorry, I couldn't log in",
  "I had connection issues",
  " Hello, are you there?",
  "We can see you, but we can't hear you.",
  "You're on mute!",
  "Can you unmute your microphone?",
  "Could you turn your video on?",
  " Can you hear me now?",
  "Can you see me now?",
  "Sorry, I didn't catch that, the connection is bad.",
  "Could you repeat that, you're breaking up a bit.",
  "You've frozen.",
  "Oh dear, we've lost you!",
  "Could you write that in the chat box please?",
  "Well, I think – sorry, go ahead…",
  "Welcome to the conference call…",
  "Is everyone ready to start?",
  "Shall we start?",
  "As you know, today we are discussing X…",
  "Did everyone receive the agenda? / Has everyone received the agenda?",
  "I’m sharing my screen, can everyone see it?",
  "I’m uploading the document now, can you see it?",
  "So the agreed action points are X, Y, Z.",
  "Is there anything else to discuss?",
  "I’ll confirm our discussion by email.",
  "Let’s finish / close the call, thank you everyone.",
];
