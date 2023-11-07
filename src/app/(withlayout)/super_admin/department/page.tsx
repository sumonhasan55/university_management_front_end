"use client"
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  RedoOutlined
} from '@ant-design/icons';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import UMTable from '@/components/ui/UMTable';
import { useDepartmentsQuery } from '@/redux/api/departmentApi';
import { Button, Input } from 'antd';
import { pages } from 'next/dist/build/templates/app-page';
import Link from 'next/link';
import React, { useState } from 'react';
import ActionBar from '@/components/ui/ActionBar';

const ManageDepartMentPage = () => {

  const query: Record<string, any> = {}
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");


  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useDepartmentsQuery({ ...query });

  //const {departments,meta}=data;



  console.log(data)

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'time',
      key: 'age',
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return <>
          <Button style={{ marginLeft: "10px" }} onClick={() => console.log(data)} type="primary" ><EyeOutlined /></Button>
          <Button style={{ marginLeft: "10px" }} onClick={() => console.log(data)} type="primary" ><EditOutlined /></Button>
          <Button style={{ marginLeft: "10px" }} onClick={() => console.log(data)} type="primary" danger><DeleteOutlined /></Button>
        </>

      }
    }
  ]


  const tableDataSource = [
    {
      key: '1',
      title: 'Register',
      time: 21 / 12 / 23,
      address: '10 Downing Street',
    },
    {
      key: '2',
      title: 'Hr',
      time: 20 / 12 / 23,
      address: '10 Downing Street',
    },
    {
      key: '3',
      title: 'Finance',
      time: 20 / 12 / 23,
      address: '10 Downing Street',
    },
  ];

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log(order, field)
    setSortBy(field as string)
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };


  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize)
    setPage(page)
    setSize(pageSize)
  };

  const resetFilters = ()=>{
    setSortBy('');
    setSearchTerm("");
    setSortOrder("");
  }

  return (
    <div style={{
      padding: "10px"
    }}>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },

        ]}
      />
      <ActionBar title='Department List'>
      
     <>
     <Input
          style={{
            width: "20%"
          }}
          onChange={(e) =>{
            setSearchTerm(e.target.value)
            console.log(searchTerm)
          }}
          type='text' placeholder='Search...'
        />
     <Link href="/super_admin/department/create">
          <Button type='primary'>Create </Button>
        </Link>
       {(!!sortBy || !!sortOrder || !!searchTerm) && (
         <Button type='primary' onClick={resetFilters}> <RedoOutlined /> </Button>
       )}
     </>
       
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={tableDataSource}
        loading={isLoading}
        pageSize={5}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        Showpagination={true}
      />

    </div>

  );
};

export default ManageDepartMentPage;