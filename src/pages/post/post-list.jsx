import React, { useEffect } from "react";
import { Table, Space, Popconfirm, Breadcrumb, PageHeader, Spin, Button } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postClearState, postDeleteAsync, postFetchAsync } from "../../redux/post/post-slice";


function PostList() {
    const dispatch = useDispatch();
    const { posts, isFetching } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(postFetchAsync())
    }, [dispatch]);

    useEffect(() => {
        return () => dispatch(postClearState())
    }, [dispatch]);

    const handleDelete = (id) => dispatch(postDeleteAsync(id))

    const columns = [
        {
            title: 'Libelle',
            dataIndex: 'libelle',
            key: 'libelle',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Category',
            key: 'categoryId',
            render: (record) => <span>{record.categoryId.libelle}</span>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button size="small">
                        <Link to={`/post/edit/${record.id}`}>Edit</Link>
                    </Button>
                    <Popconfirm
                        title="Sure to delete ?"
                        onConfirm={() => handleDelete(record.id)}>
                        <Button type="primary" size="small" danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Posts</Breadcrumb.Item>
            </Breadcrumb>

            <div className="page-header">
                <PageHeader
                    ghost={false}
                    title="Post"
                    subTitle="List"
                    extra={[
                        <Button type="primary">
                            <Link to="/post/create">New Post</Link>
                        </Button>
                    ]}>
                </PageHeader>
            </div>
            <div className="content">
                <Spin tip="Loading..." spinning={isFetching}>
                    <Table columns={columns} dataSource={posts} />
                </Spin>
            </div>
        </>
    );
}
export default PostList;