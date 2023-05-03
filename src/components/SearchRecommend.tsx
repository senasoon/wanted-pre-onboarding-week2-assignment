import { SearchRecommendProps } from '@type/search';
import React from 'react';
import styled from 'styled-components';
import SearchKeyword from '@components/SearchKeyword';

const SearchRecommendLayout = styled.div`
  width: 490px;
  margin-top: 10px;
  background-color: #fff;
  min-height: 50px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Guide = styled.span`
  font-size: 0.9rem;
  color: #949494;
`;

function SearchRecommend({ searchKeyword }: SearchRecommendProps) {
  return (
    <SearchRecommendLayout>
      {!searchKeyword && <Guide>검색어 없음</Guide>}
      {searchKeyword && (
        <>
          <Guide>추천 검색어</Guide>
          <SearchKeyword />
          <SearchKeyword />
          <SearchKeyword />
        </>
      )}
    </SearchRecommendLayout>
  );
}

export default SearchRecommend;
