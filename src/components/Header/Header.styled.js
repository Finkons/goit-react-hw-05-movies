import styled from "@emotion/styled";

export const HeaderBox = styled.header`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
  display: flex;
  justify-content:center;
  background-color: rgb(58, 57, 56);
  background-position: top;
  width: 100%;
  height: 60px;
  padding-bottom: 97px;
  padding-top: 46px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 300px;
  background-color: inherit;
  border-bottom: 1px solid white;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1), stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: 4px;
  padding-left: 1px;
  color:white;
  outline: none;

  &:hover{
    border-bottom: 1px solid #ff6b08;
    transition: border-bottom 500ms;
  }
}
`;

export const Form = styled.form`
  position: reletive;
  z-index: 101;
  display: flex;
  transform: translateY(-100px);
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}
`;

export const Button = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: inherit;
  align-items: center;
  cursor: pointer;
  transform: scale(1);
  transition: all 250ms linear;
  &:hover{
    transform: scale(1.1);
    transition: all 250ms linear;
  }
}
`;
