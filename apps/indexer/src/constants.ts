import { Decimal } from "./deps.ts";

export const FACTORY_ADDRESS =
  "0x01a46467a9246f45c8c340f1f155266a26a71c07bd55d36e8d1c7d0d438a2dbc";
export const STARTING_BLOCK = 140_000;
export const LAUNCHPAD_ADDRESS = {
  // SEPOLIA:"0x74acb6752abb734a7b3388567429217988e02409d9bf43c5586dc2c4f8baf40",
  // SEPOLIA:"0x29a532e6933a6d6f9939e59469d96b52b7c38561745331302e1a29f035e4dd0",
  SEPOLIA: "0x3798921000573bfc442d8153fc088db97bd3794f5ed19ea8c0846db5378f4af"
};
export const TOKEN_DECIMALS = new Decimal(10).pow(18);
