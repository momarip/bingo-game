import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleGrid from "../../components/molecules/single-grid";
import { changeValue } from "../../actions/gridActions";
import { v4 } from "uuid";

const GridTable = () => {
  const dispatch: any = useDispatch();

  const grid = useSelector((state: any) => state.gridReducer.grid);
  const updated = useSelector((state: any) => state.gridReducer.updated);
  const win = useSelector((state: any) => state.gridReducer.win);

  useEffect(() => {}, [updated]);
  return (
    <table role="grid" className="maxw-95">
      <tbody>
        {grid &&
          grid.map((row: any) => {
            let size = row.length;
            let totalSize = size % 2 === 0 ? size * size : size * size + 1;
            return (
              <tr role="row" key={v4()}>
                {row &&
                  row.map((phrase: any) => {
                    if (phrase.id + 1 === totalSize / 2)
                      //commonPhrases.length / 2
                      return (
                        <SingleGrid
                          title={win ? "BINGO 🎉" : "Free Space"}
                          id={phrase.id}
                          key={phrase.id}
                          switchValue={() => {}}
                          // areaPressed={false}
                        />
                      );
                    return (
                      <SingleGrid
                        title={phrase.value}
                        id={phrase.id}
                        key={phrase.id}
                        areaPressed={phrase.pressed}
                        // switchValue={() => {
                        //   dispatch(
                        //     changeValue(grid, !updated, phrase.row, phrase.col)
                        //   );
                        // }}
                      />
                    );
                  })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default GridTable;
