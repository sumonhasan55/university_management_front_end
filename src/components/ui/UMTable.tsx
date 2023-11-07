"use client"

import { Table } from "antd";

type UMTableProps = {
  columns: any,
  dataSource: any;
  loading?: boolean;
  pageSize: number;
  totalPages: number;
  showSizeChanger: boolean;
  onPaginationChange: (page: number, pageSize: number) => void;
  onTableChange: (pagination: any, filter: any, sorter: any) => void;
  Showpagination: boolean;

}



const UMTable = ({
  columns,
  dataSource,
  loading,
  onTableChange,
  pageSize,
  totalPages,
  Showpagination = true,
  showSizeChanger,
  onPaginationChange
}: UMTableProps) => {

  const paginationConfig = Showpagination ? {
    pageSize: pageSize,
    total: totalPages,
    pageSizeOptions: [5, 10, 15, 20],
    showSizeChanger: showSizeChanger,
    onChange: onPaginationChange

  } : false;



  return <Table
    dataSource={dataSource}
    loading={loading}
    columns={columns}
    pagination={paginationConfig}
    onChange={onTableChange}
  />;

};

export default UMTable;