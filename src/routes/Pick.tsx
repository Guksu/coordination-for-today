import React, { FC } from "react";
import ManPick from "../components/ManPick";
import WomanPick from "../components/WomanPick";
type Props = {
  gender: string;
  temp: number;
};

const Pick: FC<Props> = (props: Props) => {
  const temp = props.temp;
  return (
    <>
      <h1>현재온도 : {temp}</h1>
      <div>
        선택화면
        {props.gender === "man" && <ManPick temp={temp} />}
        {props.gender === "woman" && <WomanPick temp={temp} />}
      </div>
    </>
  );
};

export default Pick;
