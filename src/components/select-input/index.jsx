/* eslint-disable react/prop-types */
import { Form, Select } from "antd";
import { REQUIRED_VALIDATION_MESSAGE } from "../../constants";

export const SelectInput = ({
  name,
  label,
  placeholder,
  size = "large",
  options = [],
  required = false,
  hideClear = false,
  rules = [],
}) => {
  const getRules = () => {
    return [...rules, { required, message: REQUIRED_VALIDATION_MESSAGE }];
  };
  return (
    <div className={"flex items-center gap-x-2"}>
      <label className="mb-6 text-[#1e1e1e] min-w-[100px]">{label}</label>
      <div className="basis-[588px]">
        <Form.Item name={name} rules={getRules()}>
          <Select
            size={size}
            placeholder={placeholder}
            options={options}
            allowClear={!hideClear}
            className="max-w-[588px] rounded bg-[#f1f3f9]"
          />
        </Form.Item>
      </div>
    </div>
  );
};
