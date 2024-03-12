import { Button, Form } from "antd";
import { useState } from "react";
import { Input } from "../../../../components/input/input";
import { SelectInput } from "../../../../components/select-input";
import {
  CORRECT_ADDRESS_VALIDATION,
  NETWORK_DETAILS,
} from "../../../../constants";
import { getPoolDetails } from "../../../../utils/uniswap";

export const PoolFinder = () => {
  const [loading, setLoading] = useState(false);
  const [poolDetail, setPoolDetail] = useState();
  const [form] = Form.useForm();

  const handleFormSubmit = async (data) => {
    const details = await getPoolDetails(data, setLoading);
    if (details) {
      setPoolDetail(details);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center">
      <div className="text-2xl m-3 z-2 border-b-2">
        <b>Pool Finder</b>
      </div>
      <Form form={form} onFinish={handleFormSubmit}>
        <Input
          name="address"
          label="Pool Addess"
          placeholder="Pool Addess"
          rules={[
            {
              pattern: new RegExp(/^(0x)?[0-9a-fA-F]{40}$/),
              message: CORRECT_ADDRESS_VALIDATION,
            },
          ]}
          required
        />
        <SelectInput
          name="network"
          label="Network"
          placeholder="Select Network"
          required
          options={NETWORK_DETAILS}
        />
        <Button
          htmlType="button"
          type="primary"
          loading={loading}
          onClick={form.submit}
          className="flex w-full h-auto items-center justify-center px-6 py-1.5 shadow-none"
        >
          Submit
        </Button>
      </Form>
      {poolDetail && (
        <div className="m-4">
          <b>
            <u>Liquidity</u>
          </b>
          : {poolDetail?.liquidity}
          <br />
          <b>
            <u>Fee</u>
          </b>
          : {poolDetail?.fee}
          <br />
          <b>
            <u>Token A</u>
          </b>
          : {poolDetail?.tokenA}
          <br />
          <b>
            <u>Token B</u>
          </b>
          : {poolDetail?.tokenB}
          <br />
        </div>
      )}
    </div>
  );
};
