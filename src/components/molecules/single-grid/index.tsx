import React, { FC } from "react";
import Button from "../../atoms/button";

interface Props {
  id: string;
  title: string;
  disabled?: boolean;
  areaPressed?: boolean;
  switchValue?: () => void;
}

const SingleGrid: FC<Props> = ({
  id,
  title,
  disabled,
  areaPressed,
  switchValue,
}) => {
  return (
    <td role="gridcell">
      <div className="cell-contents">
        <h5>{id}</h5>
        <Button
          className="cell-toggle"
          areaPressed={areaPressed}
          id={id}
          onClick={switchValue}
          title={title}
          disabled={disabled}
        />
      </div>
    </td>
  );
};

export default SingleGrid;
