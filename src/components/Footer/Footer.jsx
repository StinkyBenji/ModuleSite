import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer mt-auto">
                <Container>
                    <Row>
                        <Col>Footer</Col>
                        <Col>Links</Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}