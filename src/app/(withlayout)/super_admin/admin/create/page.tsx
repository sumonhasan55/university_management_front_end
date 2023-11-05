"use client"

import Form from '@/components/Forms/Form';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormInput from '@/components/Forms/FormInput';
import FormSelect from '@/components/Forms/FormSelectField';
import FormTextArea from '@/components/Forms/FormTextArea';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import UploadImage from '@/components/ui/Uploadimage';
import { blodGroupOptions, departmentOptions, genderOptions } from '@/constants/global';
import { adminSchema } from '@/schemas/admin';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Row } from 'antd';
import React from 'react';

const CreateAdmin = () => {


    const onSubmit = async (data: any) => {
        try {
            console.log(data);

        } catch (err: any) {
            console.error(err.message)
        }
    };


    return (
        <div style={{
            padding:"15px",

        }}>
            <UMBreadCrumb
                items={[
                    {
                        label: "super_admin",
                        link: "/super_admin",
                    },
                    {
                        label: "admin",
                        link: "/super_admin/admin",
                    },

                ]}
            />
            <h1>Create A New Admin</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>

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
                    }}>Admin Information</p>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8}
                        style={{
                            marginBottom:"10px"
                        }}>
                            <div>
                                <FormInput name="admin.name.firstName" type="text" size="large" label="First Name" />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}
                           style={{
                            marginBottom:"10px"
                        }}
                        >
                            <div>
                                <FormInput name="admin.name.middleName"  type="text" size="large" label="Middle Name" />
                            </div>
                        </Col>
                       
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div>
                                <FormInput  name="admin.name.lastName" type="text" size="large" label="Last Namre" />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div ><FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="User Password"
                            /></div>
                        </Col>
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div ><FormSelect
                                name="admin.gender"
                                size="large"
                                options={genderOptions}
                             label='Gender'
                            /></div>
                        </Col>
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div ><FormSelect
                                name="admin.managementDepartment"
                                size="large"
                                options={departmentOptions}
                             label='Department'
                            /></div>
                        </Col>
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div ><UploadImage></UploadImage></div>
                        </Col>

                    </Row>

                  </div>
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
                                <FormInput name="admin.email" type="email" size="large" label="Email" />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}
                           style={{
                            marginBottom:"10px"
                        }}
                        >
                            <div>
                                <FormInput name="admin.contactNo"  type="text" size="large" label="Contact Number" />
                            </div>
                        </Col>
                       
                        <Col className="gutter-row" span={8}    style={{
                            marginBottom:"10px"
                        }}>
                            <div>
                                <FormInput  name="admin.emergencyContactNo" type="text" size="large" label="Emergency Contact Number" />
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
                            <div ><FormInput name="admin.designation" type="text" size="large" label="Designation" /></div>
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

                    <div
                        style={{
                            margin: "15px 0px",
                        }}
                    >

                    </div>
                    <Button htmlType='submit' type='primary'>Create</Button>


                </Form>
            </div>

        </div>
    );
};

export default CreateAdmin;