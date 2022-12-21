import React from "react";
import MainContainer from "../components/MainContainer";
import { H1 } from "../components";

type Props = {};

function index({}: Props) {
  return (
    <MainContainer keywords="reactJS typescript">
      <div className="w-full p-4">
        <H1 title="Главная Страница"></H1>
      </div>
    </MainContainer>
  );
}

export default index;
