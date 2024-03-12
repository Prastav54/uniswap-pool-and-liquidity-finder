/* eslint-disable react/prop-types */
import { Input as AntdInput, Form } from "antd";
import { REQUIRED_VALIDATION_MESSAGE } from "../../constants/appConstants";

export const Input = ({
  name,
  label,
  placeholder,
  size = "large",
  required = false,
  rules = [],
  allowClear = true,
  inputClassName = "basis-[588px]",
}) => {
  const getRules = () => {
    return [...rules, { required, message: REQUIRED_VALIDATION_MESSAGE }];
  };
  return (
    <div className={"flex items-center gap-x-2"}>
      <label className="mb-6 text-[#1e1e1e] min-w-[100px]">{label}</label>
      <div className={inputClassName}>
        <Form.Item name={name} rules={getRules()}>
          <AntdInput
            size={size}
            allowClear={allowClear}
            placeholder={placeholder}
          />
        </Form.Item>
      </div>
    </div>
  );
};
