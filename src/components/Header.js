import React from 'react';
import { Navbar, NavbarBrand, Row, Col } from 'reactstrap';
import SearchForm from '../components/SearchForm';

const Header = props => {
    const {changeHandler, searchKeyPress, searchKeywords, keyword} = props;

    return ( 
        <Navbar expand="md" fixed="top">
            <Row>
                <Col xs="4" md="7">
                    <NavbarBrand href="/">US News</NavbarBrand>
                </Col>
                <Col xs="8" md="5">
                    <SearchForm
                        changeHandler={changeHandler}
                        searchKeywords={searchKeywords}
                        searchKeyPress={searchKeyPress}
                        keyword={keyword}
                    />
                </Col>
            </Row>
        </Navbar>
    );
}

export default Header;

