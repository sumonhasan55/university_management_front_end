"use client"

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelect from "../Forms/FormSelectField";
import { acDepartmentOptions, acFacultyOptions, acSemisterOptions, departmentOptions, genderOptions } from "@/constants/global";
import UploadImage from "../ui/Uploadimage";


const StudentInfo = () => {
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
                        <FormInput name="student.name.firstName" type="text" size="large" label="First Name" />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}
                    style={{
                        marginBottom: "10px"
                    }}
                >
                    <div>
                        <FormInput name="student.name.middleName" type="text" size="large" label="Middle Name" />
                    </div>
                </Col>

                <Col className="gutter-row" span={6} style={{
                    marginBottom: "10px"
                }}>
                    <div>
                        <FormInput name="student.name.lastName" type="text" size="large" label="Last Namre" />
                    </div>
                </Col>
                <Col className="gutter-row" span={6} style={{
                    marginBottom: "10px"
                }}>
                    <div ><FormInput
                        name="password"
                        type="password"
                        size="large"
                        label="User Password"
                    /></div>
                </Col>
                <Col className="gutter-row" span={8} style={{
                    marginBottom: "10px"
                }}>
                    <div ><FormSelect
                        name="student.academicSemister"
                        size="large"
                        options={acSemisterOptions}
                        label='Academic Semister'
                    /></div>
                </Col>
                <Col className="gutter-row" span={8} style={{
                    marginBottom: "10px"
                }}>
                    <div ><FormSelect
                        name="student.academicDepartment"
                        size="large"
                        options={acDepartmentOptions}
                        label='Academic Department'
                    /></div>
                </Col>
                <Col className="gutter-row" span={8} style={{
                    marginBottom: "10px"
                }}>
                    <div ><FormSelect
                        name="student.academicFaculty"
                        size="large"
                        options={acFacultyOptions}
                        label='Academic Faculty'
                    /></div>
                </Col>
                <Col className="gutter-row" span={8} style={{
                    marginBottom: "10px"
                }}>
                    <div ><FormSelect
                        name="admin.gender"
                        size="large"
                        options={genderOptions}
                        label='Gender'
                    /></div>
                </Col>
                <Col className="gutter-row" span={8} style={{
                    marginBottom: "10px"
                }}>
                    <div ><UploadImage></UploadImage></div>
                </Col>


            </Row>

        </div>
    );
};

export default StudentInfo;