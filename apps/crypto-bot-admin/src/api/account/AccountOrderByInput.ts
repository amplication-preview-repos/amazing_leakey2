import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  cryptoCurrencyId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
