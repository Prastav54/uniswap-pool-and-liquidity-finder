/* eslint-disable react/prop-types */
import { InputNumber as AntdNumberInput, Form } from "antd";
import { REQUIRED_VALIDATION_MESSAGE } from "../../constants/appConstants";

export const NumberInput = ({
  name,
  label,
  placeholder,
  size = "large",
  step = 0.1,
  min = 0,
  required = false,
  rules = [],
  numberInputClassName = "basis-[588px]",
}) => {
  const getRules = () => {
    return [...rules, { required, message: REQUIRED_VALIDATION_MESSAGE }];
  };
  return (
    <div className={"flex items-center gap-x-2"}>
      <label className="mb-6 text-[#1e1e1e] min-w-[100px]">{label}</label>
      <div className={numberInputClassName}>
        <Form.Item name={name} rules={getRules()}>
          <AntdNumberInput
            size={size}
            step={step}
            min={min}
            placeholder={placeholder}
            className="w-full"
          />
        </Form.Item>
      </div>
    </div>
  );
};
