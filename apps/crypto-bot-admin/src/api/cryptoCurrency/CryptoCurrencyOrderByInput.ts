import { SortOrder } from "../../util/SortOrder";

export type CryptoCurrencyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  marketCap?: SortOrder;
  name?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
