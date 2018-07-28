import React from 'react';
import {Container, Row, Col} from "../Grid";
import CategoryHome from "../CategoryHome";
import CategoryWork from "../CategoryWork";
import CategorySocial from "../CategorySocial";
import CategoryFamily from "../CategoryFamily";




const ActiveTasks = () => (
    <div>
        <Container fluid>
        <Row>
            <Col size="sm-3 md-6">
                    <CategoryHome />
            </Col>
            <Col size="sm-3 md-6">
                    <CategoryWork />
            </Col>
        </Row>
         <Row>
        <Col size="sm-3 md-6">
                 <CategoryFamily />
        </Col>
        <Col size="sm-3 md-6">
             <CategorySocial />
         </Col>
         </Row>
        </Container>
    </div>

)
export default ActiveTasks;