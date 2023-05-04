import { SearchRecommendProps } from '@type/search';
import React from 'react';
import styled from 'styled-components';
import SearchKeyword from '@components/SearchKeyword';

const SearchRecommendLayout = styled.div`
  width: 490px;
  margin-top: 10px;
  background-color: #fff;
  min-height: 50px;
  max-height: 370px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.2);
  padding: 20px;
`;

const RecommendedKeywordsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

const Guide = styled.span`
  font-size: 0.9rem;
  color: #949494;
`;

function SearchRecommend({ recommendedKeywords, recommendedKeywordsIndex }: SearchRecommendProps) {
  return (
    <SearchRecommendLayout>
      {recommendedKeywords.length === 0 ? (
        <Guide>검색어 없음</Guide>
      ) : (
        <RecommendedKeywordsList>
          <Guide>추천 검색어</Guide>
          {recommendedKeywords.map((keyword, index) => (
            <SearchKeyword
              key={keyword.id}
              {...keyword}
              recommendedKeywordsIndex={recommendedKeywordsIndex}
              index={index}
            />
          ))}
        </RecommendedKeywordsList>
      )}
    </SearchRecommendLayout>
  );
}

export default SearchRecommend;
