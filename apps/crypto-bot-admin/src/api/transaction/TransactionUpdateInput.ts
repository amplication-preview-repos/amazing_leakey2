import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CryptoCurrencyWhereUniqueInput } from "../cryptoCurrency/CryptoCurrencyWhereUniqueInput";

export type TransactionUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  cryptoCurrency?: CryptoCurrencyWhereUniqueInput | null;
  status?: "Option1" | null;
  timestamp?: Date | null;
};
