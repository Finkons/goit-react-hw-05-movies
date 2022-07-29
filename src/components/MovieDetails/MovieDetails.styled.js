import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MDContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
}
`;

export const Img = styled.img`
  display: flex;
  align-items: flex-start;

  margin: 0 auto;
  padding-bottom: 50px;
}
`;

export const Info = styled.div`
  margin-left: 100px;
  h2{
    color: green;
    margin-bottom: 10px;
  }
  h3{
    padding-bottom: 10px ;
  }
  p{
    margin-bottom: 20px;
  }
}
`;

export const MoreInformation = styled.div`
  background-color: rgb(58, 57, 56);
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;
  justify-content: center;
}
`;

export const Link = styled(NavLink)`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 700;
  color: coral;
  text-decoration: none;
  cursor: pointer;
  transition: all 250ms linear;
}
`;

export const Button = styled.button`
  display: block;
  width: 220px;
  height: 50px;
  margin-top: 20px;
  margin-left: 60px;
  color: coral;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  background-color: rgb(58, 57, 56);
  outline: none;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover{
  color: yellow;
  transition: all 250ms linear;
  }
`;
