import { SearchKeywordProps } from '@type/search';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const KeywordLayout = styled.li<{ recommendedKeywordsIndex: number; index: number }>`
  background-color: ${props => (props.recommendedKeywordsIndex === props.index ? 'lightgray' : 'transparent')};
  padding: 6px;
`;

const Keyword = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

function SearchKeyword({ id, name, recommendedKeywordsIndex, index }: SearchKeywordProps) {
  return (
    <KeywordLayout recommendedKeywordsIndex={recommendedKeywordsIndex} index={index}>
      <Keyword to="/" target="_blank" rel="noopener noreferrer">
        <BiSearch fill="#A7AFB7" size={20} />
        <span>{name}</span>
      </Keyword>
    </KeywordLayout>
  );
}

export default SearchKeyword;
