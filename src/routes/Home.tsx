import React, { FC } from "react";
import { useHistory } from "react-router";

const Home: FC = () => {
  const history = useHistory();
  return (
    <>
      <button
        onClick={() => {
          history.push("/gender");
        }}
      >
        시작
      </button>
    </>
  );
};

export default Home;
