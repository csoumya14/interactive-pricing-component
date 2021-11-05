import React from 'react';
import List from '../../component/List/List';
import Button from '../../component/Button/Button';
import { Wrapper } from './ListContainer.css';
const ListContainer = () => {
  return (
    <Wrapper>
      <List />
      <Button />
    </Wrapper>
  );
};

export default ListContainer;
