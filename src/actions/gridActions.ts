import { CHECK_WINNER, GENERATE_NEW_GRID, UPDATE_GRID } from "./type";

export const checkWin = (grid : any, size: any, activeCell: any) => (dispatch: any) => {
  const [activeRow, activeCol] = activeCell;
  let win = false;
  if (
    checkRow(grid[activeRow]) ||
    checkCol(grid, activeCol, size) ||
    checkDiagonaLeft(grid, size, activeRow, activeCol) ||
    checkDiagonaRight(grid, size, activeRow, activeCol)
  )
    win = true;

  dispatch({
    type: CHECK_WINNER,
    payload: win,
  });
};

function checkRow(row: any) {
  if (!row) return false;

  for (let i = 0; i < row.length; i++) if (!row[i].pressed) return false;

  return true;
}

function checkCol(grid: any, activeCol: number, size: number) {
  if (!grid[activeCol]) return false;

  for (let i = 0; i < size; i++) if (!grid[i][activeCol].pressed) return false;

  return true;
}

function checkDiagonaLeft(grid: any, size: number, activeRow: number, activeCol: number) {
  if (activeRow !== activeCol) return false;
  else for (let i = 0; i < size; i++) if (!grid[i][i].pressed) return false;

  return true;
}
function checkDiagonaRight(grid: any, size: number, activeRow: number, activeCol: number) {
  for (let i = 0; i < size; i++)
    if (!grid[i][size - 1 - i].pressed) return false;

  return true;
}

export const genetareGrid = (size: any) => (dispatch: any) => {
  let grid: any = generateRandomGrid(phrases, size);
  const center = (size % 2 ? (size + 1) / 2 : size / 2) - 1;
  grid[center][center].pressed = true;
  dispatch({
    type: GENERATE_NEW_GRID,
    payload: [grid, size, [center, center]],
  });
};

export const changeValue = (grid: any, updated: boolean, row: number, col: number) => (dispatch: any) => {
  grid[row][col].pressed = !grid[row][col].pressed;

  dispatch({
    type: UPDATE_GRID,
    payload: [grid, updated, [row, col]],
  });
};

/* https://stackoverflow.com/a/12646864 */
function shuffleArray(array: []) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const generateRandomGrid = (values: any, size: number) => {
  const randomizedValues = shuffleArray(values);
  const min = 1;
  const max = 50;

  let grid:any = [];
  for (let row = 0; row < size; row++) {
    grid[row] = [];
    for (let col = 0; col < size; col++) {
      let id = col + row * size;
      grid[row][col] = {
        value: randomizedValues[id],
        number: Math.round(min + Math.random() * (max - min)),
        id: id,
        pressed: false,
        col: col,
        row: row,
      };
    }
  }
  return grid;
};

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
