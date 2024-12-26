import { CryptoCurrencyWhereInput } from "./CryptoCurrencyWhereInput";
import { CryptoCurrencyOrderByInput } from "./CryptoCurrencyOrderByInput";

export type CryptoCurrencyFindManyArgs = {
  where?: CryptoCurrencyWhereInput;
  orderBy?: Array<CryptoCurrencyOrderByInput>;
  skip?: number;
  take?: number;
};
