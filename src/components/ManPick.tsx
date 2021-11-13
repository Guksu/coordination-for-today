import React, { FC } from "react";

type Props = {
  temp: number;
};

const ManPick: FC<Props> = (props: Props) => {
  const temp = props.temp;

  return (
    <>
      <h1>남성</h1>
      {temp <= 0 && <h1>패딩</h1>}
      {temp <= 4 && temp > 0 && <h1>두꺼운 코트</h1>}
      {temp <= 8 && temp > 4 && <h1>코트, 니트</h1>}
      {temp <= 11 && temp > 8 && <h1>자켓 니트</h1>}
      {temp <= 16 && temp > 11 && <h1>자켓 가디건 </h1>}
      {temp <= 22 && temp > 16 && <h1>맨투맨 긴팔 </h1>}
      {temp > 22 && <h1>반팔 반바지 </h1>}
    </>
  );
};

export default ManPick;
