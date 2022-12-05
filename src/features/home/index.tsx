import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkWin, genetareGrid } from "../../actions/gridActions";
import Header from "../../components/organisms/header";
import GridTable from "../grid-table";
import Player1 from "../player1";
import Player2 from "../player2";
import Win from "../win";

const Home = () => {
  const dispatch: any = useDispatch();

  const win = useSelector((state: any) => state.gridReducer.win);
  const grid = useSelector((state: any) => state.gridReducer.grid);
  const size = useSelector((state: any) => state.gridReducer.size);
  const updated = useSelector((state: any) => state.gridReducer.updated);
  const activeCell = useSelector((state: any) => state.gridReducer.activeCell);

  useEffect(() => {
    if (grid && grid[0]) dispatch(checkWin(grid, size, activeCell));
  }, [updated]);

  return (
    <>
      <Header
        buttonTitle="Start a new Game"
        title="Bingo Challenge"
        onClick={() => dispatch(genetareGrid(size))}
      />

      <div className="row">
        <div className="column">
          <Player1 />
        </div>
        <div className="column">{win ? <Win /> : null}</div>
        <div className="column">
          <Player2 />
        </div>
      </div>
      <main>
        <GridTable />
      </main>
    </>
  );
};

export default Home;
