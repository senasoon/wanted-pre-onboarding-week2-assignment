import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Keyword = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function SearchKeyword() {
  return (
    <Keyword to="/" target="_blank" rel="noopener noreferrer">
      <BiSearch fill="#A7AFB7" size={20} />
      <span>키워드</span>
    </Keyword>
  );
}

export default SearchKeyword;
