export interface CompoundType {
  id: number;
  compoundName: string | null;
  compoundDescription: string | null;
  imageUrl: string;
}
export interface PagerType {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}
export interface PageContent {
  pager: PagerType;
  pageOfItems: CompoundType[];
}
