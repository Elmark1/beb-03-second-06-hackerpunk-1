export const BASE_URL = "https://hacker-punk.herokuapp.com/";

export const url = (...args) => {
  return BASE_URL + args.join("/");
};

export const CONTRACT_ADDR = "0xD796124e5cF66C4e08767BE03AF2D745FD7EAD5e";

export const EXTERNAL_WALLET_TIER = 1;