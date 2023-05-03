import React, { useState } from 'react';
import SearchBar from '@components/SearchBar';
import SearchRecommend from '@components/SearchRecommend';
import styled from 'styled-components';

const SearchLayout = styled.div`
  width: 490px;
  margin: 100px auto 0 auto;
`;

const Guide = styled.h2`
  font-size: 2.125rem;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 40px;
`;

function Search() {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const changeSearchKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const toggleInputFocus = () => {
    setIsInputFocused(isInputFocused => !isInputFocused);
  };

  return (
    <SearchLayout>
      <Guide>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Guide>
      <SearchBar
        searchKeyword={searchKeyword}
        changeSearchKeywordHandler={changeSearchKeywordHandler}
        toggleInputFocus={toggleInputFocus}
        isInputFocused={isInputFocused}
      />
      {isInputFocused && <SearchRecommend searchKeyword={searchKeyword} />}
    </SearchLayout>
  );
}

export default Search;
