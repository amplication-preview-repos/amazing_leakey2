import { CryptoCurrencyWhereUniqueInput } from "../cryptoCurrency/CryptoCurrencyWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  balance?: number | null;
  cryptoCurrency?: CryptoCurrencyWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
