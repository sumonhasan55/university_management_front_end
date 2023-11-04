import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelect from "../Forms/FormSelectField";
import { blodGroupOptions } from "@/constants/global";
import FormTextArea from "../Forms/FormTextArea";


const StudentBasicInfo = () => {
    return (
        <div 
                  style={{
                    border:"1px solid #d9d9d9",
                    borderRadius:"5px",
                    padding:"15px",
                    marginBottom:"10px"

                  }}
                  >
                    <p style={{
                        fontSize:"18px",
                        marginBottom:"10px"
                    }}>Basic Information</p>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8}
                        style={{
                            marginBottom:"10px"
                        }}>
                            <div>
                                <FormInput name="student.email" type="email" size="large" label="Email" />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}
                           style={{
                            marginBottom:"10px"
                        }}
                        >
                            <div>
                                <FormInput name="student.contactNo"  type="text" size="large" label="Contact Number" />
                            </div>
                        </Col>
                       
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div>
                                <FormInput  name="student.emergencyContactNo" type="text" size="large" label="Emergency Contact Number" />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div ><FormDatePicker
                            name="admin.dateOfBirth"
                            label='Date Of Birth'
                            size="large"
                            /></div>
                        </Col>
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div ><FormSelect
                                name="admin.blodgroup"
                                size="large"
                                options={blodGroupOptions}
                             label='Blod Group'
                            /></div>
                        </Col>
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div ><FormInput name="student.designation" type="text" size="large" label="Designation" /></div>
                        </Col>


                        <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
                      

                    </Row>

                  </div>
    );
};

export default StudentBasicInfo;