import React, { useEffect } from "react";
import { Breadcrumb, PageHeader, Form, Spin, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { categoryClearState, categoryCreateAsync } from "../../redux/category/category-slice";

const { TextArea } = Input;

function CategoryCreate() {
    const dispatch = useDispatch();
    const { isSuccess, isFetching } = useSelector((state) => state.category);
    const navigate = useNavigate();

    const onFinish = (values) => {
        dispatch(categoryCreateAsync(values))
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/category');
        }
    }, [dispatch, navigate, isSuccess]);


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        return () => dispatch(categoryClearState())
    }, [dispatch]);


    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/category">Category</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Create</Breadcrumb.Item>
            </Breadcrumb>

            <div className="page-header">
                <PageHeader
                    title="Category"
                    subTitle="New">
                </PageHeader>
            </div>

            <div className="content">
                <br />
                <Spin tip="Loading..." spinning={isFetching}>
                    <Form
                        name="basic"
                        layout="vertical"
                        labelCol={{ span: 8, offset: 8 }}
                        wrapperCol={{ span: 8, offset: 8 }}
                        initialValues={{
                            remember: true
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Libelle"
                            name="libelle"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Description" name="description">
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit"> Save</Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </>
    )
}

export default CategoryCreate