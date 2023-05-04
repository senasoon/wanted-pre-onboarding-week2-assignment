export interface SearchRecommendProps {
  recommendedKeywords: RecommendedSearchKeywords[];
  recommendedKeywordsIndex: number;
}

export interface SearchBarProps {
  searchKeyword: string;
  changeSearchKeywordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleInputFocus: () => void;
  isInputFocused: boolean;
  changeRecommendedKeywordsIndex: (key: string) => void;
}
export interface SearchKeywordProps extends RecommendedSearchKeywords {
  recommendedKeywordsIndex: number;
  index: number;
}

export interface RecommendedSearchKeywords {
  name: string;
  id: number;
}
