import React, { FC } from "react";
import ManPick from "../components/ManPick";
import WomanPick from "../components/WomanPick";

const Pick: FC = () => {
  return (
    <>
      선택화면
      <ManPick />
      <WomanPick />
    </>
  );
};

export default Pick;
