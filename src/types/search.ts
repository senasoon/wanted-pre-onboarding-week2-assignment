export interface SearchRecommendProps {
  searchKeyword: string;
}

export interface SearchBarProps extends SearchRecommendProps {
  changeSearchKeywordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleInputFocus: () => void;
  isInputFocused: boolean;
}
