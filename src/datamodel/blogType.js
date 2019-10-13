import React from "react";
import { Select } from "antd";
const { Option } = Select;

const BlogType = props => {
  const handleChange = value => {
    console.log(`selected ${value}`);
    props.val(value);
  };
  return (
    <div>
      <Select
        style={{ width: 120 }}
        onChange={handleChange}
        defaultValue="Select a option"
      >
        <Option value="News">News</Option>
        <Option value="Events">Events</Option>
      </Select>
    </div>
  );
};
export default BlogType;
