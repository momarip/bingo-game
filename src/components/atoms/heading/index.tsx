import React, { FC } from "react";

interface Props {
  title: string;
  size: number;
  className?: string;
  center?: boolean;
}

const Heading: FC<Props> = ({ title, size, className, center }) => {
  let compo;
  switch (size) {
    case 2:
      compo = <h2 className={className}>{title}</h2>;
      break;
    case 3:
      compo = <h3 className={className}>{title}</h3>;
      break;
    default:
      compo = <h1 className={className}>{title}</h1>;
      break;
  }
  return (
    <div style={{ textAlign: center ? "center" : undefined }}>{compo}</div>
  );
};

export default Heading;
