import React, { FC } from "react";
import { useHistory } from "react-router";

type Props = {
  setGender: any;
};

const Home: FC<Props> = (props: Props) => {
  const history = useHistory();

  return (
    <>
      <h1>성별을 선택해주세요</h1>
      <button
        onClick={() => {
          props.setGender("man");
          history.push("/weather");
        }}
      >
        남자
      </button>
      <button
        onClick={() => {
          props.setGender("woman");
          history.push("/weather");
        }}
      >
        여자
      </button>
    </>
  );
};

export default Home;
