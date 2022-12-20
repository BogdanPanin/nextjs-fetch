import React from "react";
import MainContainer from "../components/MainContainer";
import { H1 } from "../components";

type Props = {};

function index({}: Props) {
  return (
    <MainContainer keywords="react typescript">
      <H1 title="Главная Страница"></H1>
    </MainContainer>
  );
}

export default index;
