import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert,  } from 'reactstrap';
import _ from 'lodash';
import moment from 'moment';
import { fetchCurrentNews, loadMoreNews } from '../redux/actions/storeActions';
import Header from '../components/Header';
import NewsPreviewContainer from './NewsPreviewContainer';

export class MainContainer extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        fetchCurrentNews: PropTypes.func.isRequired,
        loadMoreNews: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            keyword: '',
            pageIndex: 1,
            sortType: 'publishedAt'
        }
    }

    componentDidMount() {
        const {keyword, sortType} = this.state;
        const {pageIndex} = this.props;

        this.props.fetchCurrentNews(
            keyword, 
            sortType, 
            pageIndex
        );
        window.addEventListener('scroll', _.throttle(this.scrollToloadMoreNews, 10), false);
    }

    scrollToloadMoreNews = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        this.setState({
          theposition: scrolled,
        })

        if (scrolled === 1 && this.props.totalResults > this.props.pageSize){
            let pageIndex = this.props.pageIndex + 1;
            const {sortType} = this.state;
            const {keyword} = this.props;
            this.props.loadMoreNews(
                keyword, 
                sortType, 
                pageIndex
            );
        }
    }

    onScrollingResult = (e) => {
        _.throttle(this.scrollToloadMoreNews, 100)(); //iPad & mobile scroll
    };

    searchKeywords = () => {
        const {keyword, sortType, pageIndex} = this.state;
        this.props.fetchCurrentNews(
            keyword, 
            sortType, 
            pageIndex
        );
        this.setState({
            keyword: ''
        })
    }

    searchKeyPress = (e) => {
        if (e.keycode === 13 || e.key === 'Enter'){
            const {keyword, sortType, pageIndex} = this.state;
            this.props.fetchCurrentNews(
                keyword, 
                sortType, 
                pageIndex
            );

            this.setState({
                keyword: ''
            })
        }
    }

    changeHandler = (e) =>{
        e.preventDefault();
        let keyword = e.target.value;  //get the value from the input
        this.setState({
            keyword
        });
    }

    //Change Sort Type
    changeSortType = (sortType) => {
        this.setState({
            sortType
        });
        const {keyword} = this.state;
        const {pageIndex} = this.props;
        this.props.fetchCurrentNews(
            keyword, 
            sortType, 
            pageIndex
        );
    }

    render() {
        const { ajaxStatus, currentNewsData, totalResults, keyword } = this.props;

        return (
            <React.Fragment>
                <Header
                    changeHandler={this.changeHandler}
                    searchKeywords={this.searchKeywords}
                    searchKeyPress={this.searchKeyPress}
                    keyword={this.state.keyword} //check input field
                />
                <div className="container">
                    {ajaxStatus.isServerError === true && <Alert color="danger">
                        {ajaxStatus.serverMessage}
                    </Alert>}
                    <div className="dashboard" onScroll={this.onScrollingResult} ref="newsScroll">
                        {currentNewsData && <NewsPreviewContainer
                            ajaxStatus={ajaxStatus}
                            keyword={keyword}
                            totalResults={totalResults}
                            currentNewsData={currentNewsData}
                            changeSortType={this.changeSortType}
                            sortType={this.state.sortType}
                        />}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {

    // console.log(state);

    return {
        ajaxStatus: state.ajaxStatus,
        currentNewsData: state.store.currentNewsData,
        keyword: state.store.keyword,
        totalResults: state.store.totalResults,
        pageIndex: state.store.pageIndex,
        pageSize: state.store.pageSize
    };
};

export default connect(
    mapStateToProps,
    { 
        fetchCurrentNews,
        loadMoreNews
    }
)(MainContainer);
