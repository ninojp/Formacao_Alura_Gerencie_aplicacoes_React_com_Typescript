import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  align-self: center;
  background-color: #88bcd1;
  border-radius: 10px;
  box-shadow: 2px 4px 4px #0000009F;
  color: #272626;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 16px;
  width: 150px;
  &:active {
    background-color: #7CA6B7;
    box-shadow: 2px 2px 4px #0000009F inset;
  }
@media screen and (min-width: 1280px) {
    grid-column-start: span 2;
    justify-self: center;
    width: 200px;
    font-size: 2.25rem;
}  
`;
// O codigo abaixo usando o CHILDREN deu erro, eu corrigi usando: <{children: string}>
class Botao extends React.Component<{children: string}> {
    render() {
        return (
            <ButtonStyle>
                {this.props.children}
            </ButtonStyle>
        )
    }
};
export default Botao;