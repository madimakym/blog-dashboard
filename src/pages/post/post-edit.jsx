import React, { useEffect } from "react";
import { Breadcrumb, PageHeader, Form, Spin, Input, Button, Select } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postClearState, postFetchOneAsync, postEditAsync } from "../../redux/post/post-slice";
import { categoryFetchAsync } from "../../redux/category/category-slice";

const { TextArea } = Input;
const { Option } = Select;

function PostEdit() {
    const dispatch = useDispatch();
    const { post, isSuccess, isFetching } = useSelector((state) => state.post);
    const category = useSelector((state) => state.category);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    let { id } = useParams();

    form.setFieldsValue({
        libelle: post.libelle,
        description: post.description,
        categoryId: post.categoryId?._id
    });

    useEffect(() => {
        dispatch(postFetchOneAsync(id))
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(categoryFetchAsync())
    }, [dispatch]);

    const onFinish = (values) => {
        dispatch(postEditAsync({ id: id, data: values }))
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/post');
        }
    }, [dispatch, navigate, isSuccess]);

    useEffect(() => {
        return () => dispatch(postClearState())
    }, [dispatch]);


    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/post">Post</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Edit</Breadcrumb.Item>
            </Breadcrumb>

            <div className="page-header">
                <PageHeader
                    title="Post"
                    subTitle="Edit">
                </PageHeader>
            </div>

            <div className="content">
                <br />
                <Spin tip="Loading..." spinning={isFetching}>
                    <Form
                        name="basic"
                        layout="vertical"
                        form={form}
                        labelCol={{ span: 8, offset: 8 }}
                        wrapperCol={{ span: 8, offset: 8 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
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

                        <Form.Item name="categoryId" rules={[{ required: true, message: "This field is required" }]}>
                            <Select>
                                {category.categories.map((item, _i) => {
                                    return <Option value={item.id}>{item.libelle}</Option>
                                })}
                            </Select>
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit">Update</Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </>
    )
}

export default PostEdit