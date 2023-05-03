import React, { useRef } from 'react';
import styled from 'styled-components';
import A11yHidden from '@styles/A11yHidden';
import { BiSearch } from 'react-icons/bi';
import { SearchBarProps } from '@type/search';

const SearchBarForm = styled.form`
  width: 490px;
  height: 74px;
  background-color: #fff;
  border-radius: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus-within {
    border: 2px solid rgb(25, 118, 210);
  }
`;

const InputLayout = styled.div`
  width: 430px;
  height: 100%;
  position: relative;
  padding: 20px 10px 20px 24px;
  display: flex;
  align-items: center;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: text;

  div {
    color: #a7afb7;
    font-size: 1.125rem;
    font-weight: 400;
  }
`;

const Input = styled.input`
  width: inherit;
  height: inherit;
  border: 0;
  outline: 0;
  font-size: 1.125rem;
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;

const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: #007be9;
  border-radius: 100%;
  margin-right: 8px;
  text-align: center;
  svg {
    vertical-align: middle;
  }
`;

function SearchBar({ searchKeyword, changeSearchKeywordHandler, toggleInputFocus, isInputFocused }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInputHandler = () => {
    inputRef.current!.focus();
  };

  return (
    <SearchBarForm>
      <InputLayout>
        {!isInputFocused && !searchKeyword && (
          <Placeholder onClick={focusInputHandler}>
            <BiSearch fill="#A7AFB7" size={20} />
            <div>질환명을 입력해 주세요.</div>
          </Placeholder>
        )}
        <A11yHidden htmlFor="search_bar_main">질환명을 검색해주세요.</A11yHidden>
        <Input
          id="search_bar_main"
          type="search"
          name="search_bar_main"
          value={searchKeyword}
          onFocus={toggleInputFocus}
          onBlur={toggleInputFocus}
          onChange={changeSearchKeywordHandler}
          ref={inputRef}
        />
      </InputLayout>
      <SearchButton type="submit">
        <BiSearch fill="#fff" size={30} />
      </SearchButton>
    </SearchBarForm>
  );
}

export default SearchBar;
