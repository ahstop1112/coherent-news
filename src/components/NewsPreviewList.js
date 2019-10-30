import React from 'react';
import { Card, CardHeader, CardBody, CardImg, Row, Col } from 'reactstrap';
import moment from 'moment';
  
const NewsPreviewList = props => {
    const {author,desciption,publishedDate,sourceId,sourceName,title,url,urlToImage} = props;
    let formatDate = moment(publishedDate).format('YYYY-MM-DD HH:mm');
    let firstChar = '';

    switch(sourceId) { 
        case 'the-new-york-times': { 
           firstChar = 'NT'
           break; 
        } 
        case 'the-washington-post': { 
            firstChar = 'WP'
           break; 
        }
        default: 
            firstChar = 'NT'
    }    

    return ( 
      <React.Fragment>
            <Card tag="a" className="newsPreview" href={url} target="_blank">
                <CardHeader>
                    <Row>
                        <Col xs="auto">
                            <div className="profile">
                                {firstChar}
                            </div>
                        </Col>
                        <Col xs="9">
                            {sourceName && <b>{sourceName}</b>}<br/>
                            <small>{formatDate}</small>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <div className="headerImg">
                        {urlToImage && <CardImg top width="100%" src={urlToImage} alt={title} />}
                    </div>
                    <CardBody>
                        {title && <h5>{title}</h5>}
                        {author && <p className="author">By <b>{author}</b></p>}
                        {desciption && <p>{desciption}</p>}
                    </CardBody>
                </CardBody>
            </Card>
        </React.Fragment>
    )    
}
 
export default NewsPreviewList