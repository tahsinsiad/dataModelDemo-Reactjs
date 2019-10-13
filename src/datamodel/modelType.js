import React, { Fragment, useState } from "react";
import { Button, Table, Divider, Icon, Modal } from "antd";
import "antd/dist/antd.css";
import BlogType from "./blogType";
import * as moment from "moment";

const ModelType = () => {
  const [visible, setVisible] = useState(false);
  const [dataVisible, setdataVisible] = useState(false);
  const dataSource = [
    {
      key: "1",
      type: "Blog",
      modelType: "News",
      createdAt: "20 Sep, 2019",
      modifiedAt: "20 Sep, 2019"
    },
    {
      key: "2",
      type: "Blog",
      modelType: "News",
      createdAt: "20 Sep, 2019",
      modifiedAt: "20 Sep, 2019"
    }
  ];

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "ModelType",
      dataIndex: "modelType",
      key: "modelType"
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt"
    },
    {
      title: "ModifiedAt",
      dataIndex: "modifiedAt",
      key: "modifiedAt"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a>
            <Icon type="edit" />
          </a>
          <Divider type="vertical" />
          <a>
            <Icon type="delete" />
          </a>
        </span>
      )
    }
  ];
  const [data, setData] = useState(dataSource);
  const newData = {};
  const getType = type => {
    newData.key = "3";
    newData.type = "Blog";
    newData.modelType = type;
    newData.createdAt = moment(Date.now()).format("DD-MMM-YYYY");
    newData.modifiedAt = moment(Date.now()).format("DD-MMM-YYYY");
  };

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
    setdataVisible(true);
    setData([...data, newData]);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const datahandleOk = () => {
    setdataVisible(false);
  };
  const datahandleCancel = () => {
    setdataVisible(false);
  };

  return (
    <Fragment>
      <div style={{ padding: "20px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Create Model</h2>
          <Button onClick={showModal} type="primary">
            Create new Model
          </Button>
        </div>
        <div>
          <Table dataSource={data} columns={columns} />;
        </div>
      </div>
      <Modal
        title="Create Model"
        visible={visible}
        onOk={handleOk}
        okText="Next"
        onCancel={handleCancel}
      >
        <BlogType val={getType} />
      </Modal>
      <Modal
        title="Data"
        visible={dataVisible}
        onOk={datahandleOk}
        okText="Create"
        onCancel={datahandleCancel}
      ></Modal>
    </Fragment>
  );
};
export default ModelType;
