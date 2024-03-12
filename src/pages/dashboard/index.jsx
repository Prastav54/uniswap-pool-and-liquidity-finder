import { Tabs } from "antd";
import { LiquidityFinder } from "./helper/liquidity-finder";
import { PoolFinder } from "./helper/pool-finder";
export const Dashboard = () => {
  const tabItems = [
    {
      key: "1",
      label: `Find Liquidity`,
      children: <LiquidityFinder />,
    },
    {
      key: "2",
      label: `Find Pool`,
      children: <PoolFinder />,
    },
  ];
  return (
    <div className="top-0 z-10 h-[80px] bg-white">
      <Tabs
        defaultActiveKey="1"
        items={tabItems}
        tabBarStyle={{
          padding: "0 1rem",
        }}
      />
    </div>
  );
};
