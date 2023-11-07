"use client"

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { Button, Col, Row, message } from 'antd';
import { useAddDepartmentMutation } from '@/redux/api/departmentApi';
import React from 'react';



const CreateDepartmentPage = () => {

    const [addDepartment]= useAddDepartmentMutation();


    const onSubmit = async (data: any) => {
        message.loading("Creating...")
        try {
            await addDepartment(data);
            message.success("Department Added SuccessFully")
            console.log(data);

        } catch (err: any) {
            console.error(err.message);
            message.error(err)
        }
    };
    const base="super_admin";


    return (

        <div style={{
            padding: "10px"
        }}>
            <UMBreadCrumb
                items={[
                    {
                        label: `${base}`,
                        link:  `/${base}`,
                    },
                    {
                        label: "department",
                        link:  `/${base}/department`,
                    },

                ]}
            />
            <div style={{
                marginTop: "10px"
            }}>
                <h1>Create Department</h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8}
                                style={{
                                    marginBottom: "10px"
                                }}>
                                <div style={{
                                    marginTop:"10px"
                                }}>
                                    <FormInput name="title" type="text" size="large" label="Title" />
                                </div>
                            </Col>

                        </Row>
                        <Button htmlType='submit' type='primary'>Add</Button>
                    </Form>


                </div>

            </div>
        </div>
    );
};

export default CreateDepartmentPage;