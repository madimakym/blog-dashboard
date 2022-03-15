import React, { useEffect } from "react";
import { Table,Popconfirm,Breadcrumb, Space, PageHeader, Spin, Button } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { categoryClearState, categoryDeleteAsync, categoryFetchAsync } from "../../redux/category/category-slice";

function CategoryList() {
    const dispatch = useDispatch();
    const { categories, isFetching } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(categoryFetchAsync())
    }, [dispatch]);

    useEffect(() => {
        return () => dispatch(categoryClearState())
    }, [dispatch]);

    const handleDelete = (id) => dispatch(categoryDeleteAsync(id))

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
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button size="small">
                        <Link to={`/category/edit/${record.id}`}>Edit</Link>
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
                <Breadcrumb.Item>Category</Breadcrumb.Item>
            </Breadcrumb>

            <div className="page-header">
                <PageHeader
                    ghost={false}
                    title="Category"
                    subTitle="List"
                    extra={[
                        <Button type="primary">
                            <Link to="/category/create">New Category</Link>
                        </Button>
                    ]}>
                </PageHeader>
            </div>
            <div className="content">
                <Spin tip="Loading..." spinning={isFetching}>
                    <Table columns={columns} dataSource={categories} />
                </Spin>
            </div>
        </>
    );
}
export default CategoryList;