import { Col, Row } from 'antd';
import React from 'react';
import FormInput from '../Forms/FormInput';

const GurdianInfo = () => {
    return (
        <div
        style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
            marginTop:"10px"

        }}
    >

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}
                style={{
                    marginBottom: "10px"
                }}>
                <div>
                    <FormInput name="student.guardian.fatherName" type="text" size="large" label="Father name" />
                </div>
            </Col>
            <Col className="gutter-row" span={6}
                style={{
                    marginBottom: "10px"
                }}
            >
                <div>
                    <FormInput name="student.guardian.fatherOcupasion" type="text" size="large" label="Father ocupassion" />
                </div>
            </Col>

            <Col className="gutter-row" span={6} style={{
                marginBottom: "10px"
            }}>
                <div>
                    <FormInput name="student.guardian.fatherCno" type="text" size="large" label="Father contact no." />
                </div>
            </Col>
          
            <Col className="gutter-row" span={6} style={{
                marginBottom: "10px"
            }}>
                <div>
                    <FormInput name="student.guardian.motherName" type="text" size="large" label="Mother name" />
                </div>
            </Col>
            <Col className="gutter-row" span={8} style={{
                marginBottom: "10px"
            }}>
                <div>
                    <FormInput name="student.guardian.motherOcupassion" type="text" size="large" label="Mother occupation." />
                </div>
            </Col>
            <Col className="gutter-row" span={8} style={{
                marginBottom: "10px"
            }}>
                <div>
                    <FormInput name="student.guardian.motherCno" type="text" size="large" label="Mother contact no." />
                </div>
            </Col>
            <Col className="gutter-row" span={8} style={{
                marginBottom: "10px"
            }}>
                <div>
                    <FormInput name="student.guardian.address" type="text" size="large" label="Address" />
                </div>
            </Col>
          
        </Row>

    </div>
    );
};

export default GurdianInfo;