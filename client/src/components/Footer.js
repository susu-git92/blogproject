import React from 'react';
import {Row, Col} from 'react-bootstrap';
// import "../assets/custom.scss"
import styled from 'styled-components'

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear()
        return year;
    };

    return (
        <Layout>
            <Row>
                <Col>
                <p>Copyright &copy; <span>{thisYear()}</span></p>
                </Col>
            </Row>
        </Layout>
    )
};
export default Footer;

const Layout=styled.div`
    display: flex;
    justify-content: center;
    background-color: #343a40;
    color: #fff;
`