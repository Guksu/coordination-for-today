import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <Link to="/">
      <h1>오늘 뭐 입지 ?</h1>
    </Link>
  );
};

export default Header;
