import React from 'react';
import styled from 'styled-components';

const ThumnailFrame = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  cursor: pointer;
`;

const Name = styled.span`
  color: #fff;
  bottom: 0;
  right: 0;
  position: absolute;
  font-size: 2em;
  font-weight: 200;
  width: 100%;
  text-align: right;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DrinkPicture = styled.img``;

function DrinkThumbnail({ drink }) {
  return (
    <ThumnailFrame>
      <Name>{drink.strDrink}</Name>
      <DrinkPicture height="200px" width="200px" src={drink.strDrinkThumb} />
    </ThumnailFrame>
  );
}

export default DrinkThumbnail;
