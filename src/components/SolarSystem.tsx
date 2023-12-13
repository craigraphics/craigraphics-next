"use client";
import { styled, keyframes } from "styled-components";
import { colorValues } from "./ThemeRegistry/colorValues";

const Space = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Milkyway = styled.div`
  font-size: 7px;
  width: 40em;
  height: 40em;
  position: relative;
`;
const Sun = styled.div`
  position: absolute;
  background-color: ${colorValues.tertiary.main};
  border-radius: 50%;
  box-shadow: 0 0 3em ${colorValues.tertiary.main};
  top: 15em;
  left: 15em;
  height: 10em;
  width: 10em;
`;
const orbit = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const Earth = styled.div`
  position: absolute;
  border-style: solid;
  border-color: ${colorValues.secondary.light} transparent;
  border-width: 0.1em 0.1em 0 0;
  border-radius: 50%;
  top: 5em;
  left: 5em;
  width: 30em;
  height: 30em;
  animation: ${orbit} 70.5s linear infinite;
  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 2.8em;
    right: 2.8em;
    width: 3em;
    height: 3em;
    background-color: ${colorValues.secondary.main};
  }
`;
const Moon = styled.div`
  position: absolute;
  border-style: solid;
  border-color: white transparent;
  border-width: 0.1em 0.1em 0 0;
  border-radius: 50%;
  top: 0;
  right: 0;
  width: 8em;
  height: 8em;
  animation: ${orbit} 12.7s linear infinite;
  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0.8em;
    right: 0.2em;
    width: 1.2em;
    height: 1.2em;
    background-color: #f6f1d5;
  }
`;

export default function SolarSystem() {
  return (
    <Space>
      <Milkyway>
        <Sun></Sun>
        <Earth>
          <Moon></Moon>
        </Earth>
      </Milkyway>
    </Space>
  );
}
