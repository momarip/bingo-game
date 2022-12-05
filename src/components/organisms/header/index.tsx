import React, { FC } from "react";
import Button from "../../atoms/button";
import Heading from "../../atoms/heading";

interface HeadProps {
  id?: string;
  onClick?: () => void;
  title: string;
  buttonTitle: string;
}

const Header: FC<HeadProps> = ({ onClick, title, buttonTitle, id }) => {
  return (
    <div>
      <header className="flex justify-between items-end bb-5 pv-1">
        <Heading size={1} title={title} />
        <h2>Player 1</h2>
        <h2>Player 2</h2>
        <Button
          className="fw8 bg-white white pa3 bw1"
          areaPressed
          id={id}
          onClick={onClick}
          title={buttonTitle}
        />
      </header>
    </div>
  );
};

export default Header;
