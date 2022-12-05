import React, { FC } from "react";

interface Props {
  id?: string;
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  areaPressed?: boolean;
  className: string;
}

const Button: FC<Props> = ({
  id,
  title,
  onClick,
  disabled,
  areaPressed,
  className,
}) => {
  const disableBtn = { disabled: disabled ? true : false };
  return (
    <>
      <button
        className={className}
        onClick={onClick}
        {...disableBtn}
        aria-pressed={areaPressed}
        id={`abc-cell-${id}`}
        tabIndex={-1}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
