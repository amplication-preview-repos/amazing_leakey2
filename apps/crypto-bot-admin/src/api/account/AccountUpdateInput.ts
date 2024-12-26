import { CryptoCurrencyWhereUniqueInput } from "../cryptoCurrency/CryptoCurrencyWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  balance?: number | null;
  cryptoCurrency?: CryptoCurrencyWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
