// ClassSchedule.js
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './component/Header';
import YogaScheduler from './component/YogaScheduler';

function ClassesPage() {
    return (
        <>
            <Header />
            <div>
                <Container>
                    <Row>
                        <div style={{ container: true }}>
                            <img src="https://images.pexels.com/photos/8436587/pexels-photo-8436587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image" className="image" />
                            <div style={{ textAlign: 'center' }}><h2>CLASSES</h2></div>
                        </div>
                    </Row>
                    <Row>
                        <YogaScheduler/>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ClassesPage;