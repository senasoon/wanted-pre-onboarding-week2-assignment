import api from '@api/instance';
import { RecommendedSearchKeywords } from '@type/search';

export const getRecommendedKeywords = async (keyword: string): Promise<RecommendedSearchKeywords[]> => {
  const response = await api.get(`api/v1/search-conditions/?name=${keyword}`);
  return response.data;
};
