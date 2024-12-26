import { AccountCreateNestedManyWithoutCryptoCurrenciesInput } from "./AccountCreateNestedManyWithoutCryptoCurrenciesInput";
import { TransactionCreateNestedManyWithoutCryptoCurrenciesInput } from "./TransactionCreateNestedManyWithoutCryptoCurrenciesInput";

export type CryptoCurrencyCreateInput = {
  accounts?: AccountCreateNestedManyWithoutCryptoCurrenciesInput;
  marketCap?: number | null;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCryptoCurrenciesInput;
};
