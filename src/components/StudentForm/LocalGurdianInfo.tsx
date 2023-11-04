import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";


const LocalGurdianInfo = () => {
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
                    <FormInput name="student.localGurdian.name" type="text" size="large" label="Local guardian name" />
                </div>
            </Col>
            <Col className="gutter-row" span={6}
                style={{
                    marginBottom: "10px"
                }}
            >
                <div>
                    <FormInput name="student.localGurdian.occcupation" type="text" size="large" label="Local guardian occcupation" />
                </div>
            </Col>

            <Col className="gutter-row" span={6} style={{
                marginBottom: "10px"
            }}>
                <div>
                    <FormInput name="student.localGurdian.address" type="text" size="large" label="Local guardian address" />
                </div>
            </Col>
          
            <Col className="gutter-row" span={6} style={{
                marginBottom: "10px"
            }}>
                <div>
                    <FormInput name="student.localGurdian.contactNo" type="text" size="large" label="Local guardian contact no." />
                </div>
            </Col>
          
        </Row>

    </div>
    );
};

export default LocalGurdianInfo;