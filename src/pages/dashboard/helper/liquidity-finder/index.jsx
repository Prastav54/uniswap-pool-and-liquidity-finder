import { Button, Form } from "antd";
import { Input } from "../../../../components/input/input";
import { NumberInput } from "../../../../components/number-input";
import { SelectInput } from "../../../../components/select-input";
import { NETWORK_DETAILS } from "../../../../constants";
import { useState } from "react";
import { getPoolAddress } from "../../../../utils/uniswap";

export const LiquidityFinder = () => {
  const [loading, setLoading] = useState(false);
  const [poolAddress, setPoolAddress] = useState();
  const [form] = Form.useForm();

  const handleFormSubmit = async (data) => {
    const address = await getPoolAddress(data, setLoading);
    if (address) {
      setPoolAddress(address[0]);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center">
      <div className="text-2xl m-3 z-2 border-b-2">
        <b>Liquidity Finder</b>
      </div>
      <Form form={form} onFinish={handleFormSubmit}>
        <Input
          name="tokenA"
          label="Token A"
          placeholder="First Token Address"
          rules={[
            {
              pattern: new RegExp(/^(0x)?[0-9a-fA-F]{40}$/),
              message: "Please provide correct address",
            },
          ]}
          required
        />
        <Input
          name="tokenB"
          label="Token B"
          placeholder="Second Token Address"
          rules={[
            {
              pattern: new RegExp(/^(0x)?[0-9a-fA-F]{40}$/),
              message: "Please provide correct address",
            },
          ]}
          required
        />
        <NumberInput
          name="fee"
          label="Fee Ratio"
          placeholder="Fee Ratio"
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
      {poolAddress && (
        <div className="text-xl m-3">{`Pool Address: ${poolAddress}`}</div>
      )}
    </div>
  );
};
