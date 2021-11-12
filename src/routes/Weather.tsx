import React, { FC } from "react";

type Props = {
  gender: string;
};
const Weather: FC<Props> = (props: Props) => {
  return (
    <>
      <h1>날씨</h1>
    </>
  );
};

export default Weather;
