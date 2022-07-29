import styled from "@emotion/styled";

export const Item = styled.div`
  width: 300px;
  flex-basis: calc(100% / 4 - 30px);
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transform: scale(1);
  transition: all 250ms linear;
  &:hover{
    transform: scale(1.03);
  transition: all 250ms linear;
  }
}
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
}
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
`;

