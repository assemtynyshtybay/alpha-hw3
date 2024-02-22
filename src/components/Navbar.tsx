import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CHARACTERS, EPISODES, MAIN } from "../utils/routes";

const tabs = [
  { name: "Главная", link: MAIN },
  { name: "Герои", link: CHARACTERS },
  { name: "Эпизоды", link: EPISODES },
];

const Navbar = () => {
  const nav = useNavigate();
  return (
    <Header>
      {tabs?.map((tab, i) => (
        <Tab key={tab?.name + i} onClick={() => nav(tab?.link)}>
          {tab?.name}
        </Tab>
      ))}
    </Header>
  );
};

export default Navbar;

const Header = styled.div`
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: right;
  background-color: gray;
  color: lightGray;
  font-size: 26px;
  font-weight: 900;
`;

const Tab = styled.div`
  padding: 0 25px;
`;
