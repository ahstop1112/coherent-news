import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import SortTypeDropdown from '../components/SortTypeDropdown';
import NewsPreviewList from '../components/NewsPreviewList'; 
import LoadingContainer from '../components/loading/LoadingContainer';

class NewsPreviewContainer extends Component {

    static propTypes = {
        currentNewsData: PropTypes.array.isRequired,
        changeSortType: PropTypes.func.isRequired,
        sortType: PropTypes.string.isRequired
    };

    constructor(props){
        super(props);
    }

    render() {
        const { keyword, currentNewsData, totalResults, ajaxStatus, changeSortType, sortType } = this.props;
        let newsData =  _.uniqBy(currentNewsData, 'title');
        
        return (
            <React.Fragment>
                <Row>
                    <Col xs="12" lg="6">
                        <h4 className="heading">
                            {totalResults > 0 && <React.Fragment>
                                {keyword && <React.Fragment>
                                    {totalResults} news match "{keyword}"
                                </React.Fragment>}
                                {!keyword && <React.Fragment>
                                    Total: <b>{totalResults}</b> news
                                </React.Fragment>}
                            </React.Fragment>}
                            {!totalResults && !ajaxStatus.isLoading && <span>No Result was found!</span>}
                        </h4>
                    </Col>
                    <Col xs="12" lg="6">
                        <SortTypeDropdown 
                            changeSortType={changeSortType}
                            sortType={sortType}
                        />
                    </Col>
                </Row>
                
                {newsData && <div className="newsPreviewContainer">
                    {newsData.map((item, index) =>{
                            return(
                                <NewsPreviewList
                                    key={index}
                                    author={item.author}
                                    desciption={item.description}
                                    publishedDate={item.publishedAt}
                                    sourceId={item.source.id}
                                    sourceName={item.source.name}
                                    title={item.title}
                                    url={item.url}
                                    urlToImage={item.urlToImage}
                                />
                            )
                        })
                    }
                    {ajaxStatus && <LoadingContainer loading={ajaxStatus.isLoading} />}
                </div>}
            </React.Fragment>
         );
    }
}
 
export default NewsPreviewContainer;
