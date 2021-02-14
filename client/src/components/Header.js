import React from 'react';
import styled from 'styled-components';
// import {Row, Col}from 'reactstrap'
import '../assets/custom.css'

const Header = () => {
    return (
        <PageHeader id="page-header" className="mb-3">
            <div>
                <div md="6" sm="auto" className="text-center m-auto">
                    <h1>LallaSu Blog </h1>
                    <p>랄라수의 작업 블로그입니다</p>
                </div>
            </div>
        </PageHeader>
    )
}
export default Header;

const PageHeader=styled.div``