import { MnemonicToSeedBin } from "@theqrl/wallet.js";
import { Buffer } from "buffer";
import Web3 from "@theqrl/web3";

const web3 = new Web3(new Web3.providers.HttpProvider((import.meta.env?.NODE_ENV === "production" ? import.meta.env?.VITE_RPC_URL_PRODUCTION : import.meta.env?.VITE_RPC_URL_DEVELOPMENT) || "http://mainnet.zond.network:8545"));

export const getHexSeedFromMnemonic = (mnemonic?: string) => {
  if (!mnemonic) return "";
  const trimmedMnemonic = mnemonic.trim();
  if (!trimmedMnemonic) return "";
  const seedBin = MnemonicToSeedBin(trimmedMnemonic);
  return "0x".concat(Buffer.from(seedBin).toString("hex"));
};

export const getAddressFromMnemonic = (mnemonic?: string) => {
  if (!mnemonic) return "";
  const trimmedMnemonic = mnemonic.trim();
  if (!trimmedMnemonic) return "";
  const seedBin = MnemonicToSeedBin(trimmedMnemonic);
  const account = web3.zond.accounts.seedToAccount(seedBin);
  return account.address;
};
