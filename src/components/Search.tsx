import React, { useEffect, useState } from 'react';
import SearchBar from '@components/SearchBar';
import SearchRecommend from '@components/SearchRecommend';
import styled from 'styled-components';
import useDebounce from '@hooks/useDebounce';
import { getRecommendedKeywords } from '@api/search';
import { RecommendedSearchKeywords } from '@type/search';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@utils/storage';

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
  const [recommendedKeywords, setRecommendedKeywords] = useState<RecommendedSearchKeywords[]>([]);
  const [recommendedKeywordsIndex, setRecommendedKeywordsIndex] = useState<number>(-1);

  const changeSearchKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const toggleInputFocus = () => {
    setIsInputFocused(isInputFocused => !isInputFocused);
  };

  const changeRecommendedKeywordsIndex = (key: string) => {
    if (key === 'ArrowDown') {
      if (recommendedKeywordsIndex === recommendedKeywords.length - 1 && recommendedKeywords.length > 0) {
        setRecommendedKeywordsIndex(0);
      } else {
        setRecommendedKeywordsIndex(prev => prev + 1);
      }
    }

    if (key === 'ArrowUp') {
      if (recommendedKeywordsIndex !== -1) {
        setRecommendedKeywordsIndex(prev => prev - 1);
      }
    }
  };

  const getRecommendedKeywordsHandler = async () => {
    const uppercaseKeyword = searchKeyword.toUpperCase();
    const cachingData = getLocalStorage(uppercaseKeyword);
    if (cachingData) {
      const cachingDataParse = JSON.parse(cachingData);
      const currentTime = new Date().getTime();
      if (currentTime > cachingDataParse.expires) {
        removeLocalStorage(uppercaseKeyword);
      } else {
        setRecommendedKeywords(cachingDataParse.value);
        return;
      }
    }
    try {
      const response = await getRecommendedKeywords(uppercaseKeyword);
      setRecommendedKeywords(response.slice(0, 7));

      const DAY = 1000 * 60 * 60 * 24;
      const expires = new Date().getTime() + DAY;
      const newCachingData = JSON.stringify({ value: response.slice(0, 7), expires });
      setLocalStorage(uppercaseKeyword, newCachingData);
    } catch (error) {
      throw new Error('예기치 못한 오류가 발생했습니다.');
    }
  };

  const debouncedKeyword = useDebounce(searchKeyword, 1000);

  useEffect(() => {
    if (!debouncedKeyword) {
      setRecommendedKeywords([]);
      setRecommendedKeywordsIndex(-1);
    }
    if (debouncedKeyword) getRecommendedKeywordsHandler();
  }, [debouncedKeyword]);

  useEffect(() => {
    if (!searchKeyword) {
      setRecommendedKeywords([]);
      setRecommendedKeywordsIndex(-1);
    }
  }, [searchKeyword]);

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
        changeRecommendedKeywordsIndex={changeRecommendedKeywordsIndex}
      />
      {isInputFocused && searchKeyword && (
        <SearchRecommend
          recommendedKeywords={recommendedKeywords}
          recommendedKeywordsIndex={recommendedKeywordsIndex}
        />
      )}
    </SearchLayout>
  );
}

export default Search;
