import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    SERVER_ERROR,
    RESET_STATUS
} from '../reducers/ajaxStatusReducer';
import {
    RESET_NEWS_RESULTS,
    FETCH_CURRENT_NEWS,
    FETCH_MORE_NEWS,
    PAGEINDEX_REQUESTED
} from '../reducers/storeReducer';
import axios from 'axios';
import apiConfig from './config';

//Get Current Forecast, default is Hong Kong

export function fetchCurrentNews(keyword,
                                sortType,
                                pageIndex) {
    return async dispatch => {
        const apiKeyword = keyword.replace(/\s/g, "+");
        let newsUrl = `${apiConfig.news.API_URL}everything?q=${apiKeyword}&${apiConfig.news.PARAM}&pageSize=${apiConfig.news.PAGE_SIZE}&sortBy=${sortType}&apiKey=${apiConfig.news.API_KEY}`;
        // console.log(newsUrl);
        dispatch({
            type: RESET_NEWS_RESULTS
        });

        dispatch({
            type: FETCH_PENDING
        });

        try {
            const response = await axios.get(newsUrl);
            let filteredData = response.data.articles.slice(0, apiConfig.news.RECORD_COUNT);

            if (filteredData){
                dispatch({
                    type: FETCH_CURRENT_NEWS,
                    currentNewsData: filteredData || {},
                    keyword: keyword,
                    totalResults: response.data.totalResults,
                    totalPage: response.data.articles.length / apiConfig.news.PAGE_SIZE,
                    pageIndex: 1,
                    pageSize: apiConfig.news.PAGE_SIZE
                });
    
                dispatch({
                    type: FETCH_COMPLETE
                });
            }
        } catch (error) {

            console.log("error: " + error);

            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function loadMoreNews(keyword,
    sortType,
                            pageIndex) {
    return async dispatch => {
        const apiKeyword = keyword.replace(/\s/g, "+");
        let newsUrl = `${apiConfig.news.API_URL}everything?q=${apiKeyword}&${apiConfig.news.PARAM}&pageSize=${apiConfig.news.PAGE_SIZE}&sortBy=${sortType}&apiKey=${apiConfig.news.API_KEY}`;

        dispatch({
            type: FETCH_PENDING
        });

        // console.log("loadMore: " + keyword + ", " + sortBy + ", " + pageIndex);

        try {
            const response = await axios.get(newsUrl);

            let startRecord = (pageIndex - 1) * apiConfig.news.RECORD_COUNT;
            let endRecord = pageIndex * apiConfig.news.RECORD_COUNT;
            let filteredData = response.data.articles.slice(startRecord, endRecord);

            // console.log("startRecord: " + startRecord + "; endRecord: " + endRecord);

            if (filteredData){
                dispatch({
                    type: FETCH_MORE_NEWS,
                    keyword: keyword,
                    pageIndex: pageIndex,
                    currentNewsData: filteredData || {},
                });

                dispatch({
                    type: FETCH_COMPLETE
                });
            }
        } catch (error) {

            console.log("error: " + error);

            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function storePageRequested(pageIndex) {
    return async dispatch => {
        dispatch({
            type: PAGEINDEX_REQUESTED,
            pageRequested: pageIndex
        })
    }
}

export function resetAjaxStatus() {
    return (dispatch) => {
        dispatch({
            type: RESET_STATUS
        })
    }
}