import apiConfig from '../actions/config';

export const RESET_NEWS_RESULTS = 'news/resetNewsResults';
export const FETCH_CURRENT_NEWS = 'news/fetchCurrentNews';
export const FETCH_MORE_NEWS = 'news/fetchMoreNews';
export const PAGEINDEX_REQUESTED = 'news/pageIndexRequested';


const initialState = {
    currentNewsData: [],
    keyword: '',
    totalCount: 0,
    totalPage: 0,
    pageIndex: 1,
    pageSize: apiConfig.news.PAGE_SIZE,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case RESET_NEWS_RESULTS:
            return {
                ...state,
                currentNewsData: [],
                keyword: '',
                totalCount: 0,
                totalPage: 0,
                pageIndex: 1,
                pageSize: apiConfig.news.PAGE_SIZE,
            };
        case FETCH_CURRENT_NEWS: {
            return {
                ...state,
                currentNewsData: action.currentNewsData,
                keyword: action.keyword,
                totalResults: action.totalResults,
                totalPage: action.totalPage,
                pageIndex: action.pageIndex,
                pageSize: action.pageSize
            };
        }
        case FETCH_MORE_NEWS:
            return {
                ...state,
                currentNewsData: [...state.currentNewsData, ...action.currentNewsData],
                keyword: action.keyword,
                pageIndex: action.pageIndex,
            };
        case PAGEINDEX_REQUESTED:
            return {
                ...state,
                pageRequested: action.pageRequested
            };    
        default:
            return state;
    }
}