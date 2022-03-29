import React, { useEffect } from "react";
import { Breadcrumb, PageHeader, Form, Spin, Input, Button, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postClearState, postCreateAsync } from "../../redux/post/post-slice";
import { categoryFetchAsync } from "../../redux/category/category-slice";

const { TextArea } = Input;
const { Option } = Select;

function PostCreate() {
    const dispatch = useDispatch();
    const { isSuccess, isFetching } = useSelector((state) => state.post);
    const category = useSelector((state) => state.category);
    const navigate = useNavigate();

    const onFinish = (values) => {
        dispatch(postCreateAsync(values))
    };

    useEffect(() => {
        dispatch(categoryFetchAsync())
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess) {
            navigate('/post');
        }
    }, [dispatch, navigate, isSuccess]);


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        return () => dispatch(postClearState())
    }, [dispatch]);

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/post">Posts</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Create</Breadcrumb.Item>
            </Breadcrumb>

            <div className="page-header">
                <PageHeader
                    title="Post"
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

                        <Form.Item label="Category" name="category">
                            <div className="form-group">
                                <Form.Item name="categoryId" rules={[{ required: true, message: "This field is required" }]}>
                                    <Select>
                                        {category.categories.map((item, _i) => {
                                            return <Option value={item.id}>{item.libelle}</Option>
                                        })}
                                    </Select>
                                </Form.Item>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Save</Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </>
    )
}

export default PostCreate