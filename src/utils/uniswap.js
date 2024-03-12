import { Contract, ethers } from "ethers";
import {
  FACTORY_ABI,
  FACTORY_ADDRESS,
  SOMETHING_WENT_WRONG,
} from "../constants";
import { AlertMessage } from "../components/alert";
import UniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json";

export const getPoolAddress = async (liquidity, setLoader) => {
  setLoader(true);
  try {
    const provider = new ethers.providers.JsonRpcProvider(liquidity.network);
    const factoryContract = new ethers.Contract(
      FACTORY_ADDRESS,
      FACTORY_ABI,
      provider
    );
    const poolAddress = await factoryContract.functions.getPool(
      liquidity.tokenA,
      liquidity.tokenB,
      Number(liquidity.fee)
    );
    return poolAddress;
  } catch (error) {
    console.log(error);
    AlertMessage(SOMETHING_WENT_WRONG);
  } finally {
    setLoader(false);
  }
};

const getPoolData = async (poolContract, network, poolAddress) => {
  const [liquidity, fee, token0, token1] = await Promise.all([
    poolContract.liquidity(),
    poolContract.fee(),
    poolContract.token0(),
    poolContract.token1(),
  ]);
  return {
    liquidity: liquidity.toString(),
    fee,
    tokenA: token0,
    tokenB: token1,
    network,
    poolAddress,
  };
};

export const getPoolDetails = async (poolInformation, setLoader) => {
  setLoader(true);
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      poolInformation.network
    );
    const poolContract = new Contract(
      poolInformation.address,
      UniswapV3Pool.abi,
      provider
    );
    const poolData = await getPoolData(
      poolContract,
      poolInformation.network,
      poolInformation.address
    );
    return poolData;
  } catch (error) {
    console.log(error);
    AlertMessage(SOMETHING_WENT_WRONG);
  } finally {
    setLoader(false);
  }
};
