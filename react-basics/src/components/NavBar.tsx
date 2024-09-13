import React from "react";

interface Props {
  itemCount: number;
}

const NavBar = ({ itemCount }: Props) => {
  return (
    <div>
      <p>Items : {itemCount}</p>
    </div>
  );
};

export default NavBar;
