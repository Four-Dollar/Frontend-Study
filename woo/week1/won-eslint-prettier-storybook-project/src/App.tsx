import React from "react";

import styled, { css, keyframes } from "styled-components";
// import Button from "./components/Button";
// PassWordInput CSS 안되는거 준현이형한테 물어보기. && import Button은 왜 선언한것인지?

interface StyledProps {
  primary?: boolean;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Section = styled.section`
  padding: 4em;
  background: papayawhip;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button<StyledProps>`
  /* Adapt the colors based on primary prop */gi
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;
const ButtonWithCSSFunc = styled.button<StyledProps>`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  }

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function App() {
  return (
    // <Section>
    //   <Title>Hello World</Title>
    //   <Button>Normal</Button>
    //   <Button primary>Primary</Button>
    //   <ButtonWithCSSFunc primary>ButtonCSSFunc</ButtonWithCSSFunc>
    //   <TomatoButton>Tomato</TomatoButton>
    //   <Input placeholder="A small text input" />
    //   <PasswordInput placeholder="A bigger text input" size="2em" />
    //   <Rotate>Animation</Rotate>
    // </Section>
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
