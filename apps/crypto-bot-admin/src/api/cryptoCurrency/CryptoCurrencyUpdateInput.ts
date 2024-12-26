import { AccountUpdateManyWithoutCryptoCurrenciesInput } from "./AccountUpdateManyWithoutCryptoCurrenciesInput";
import { TransactionUpdateManyWithoutCryptoCurrenciesInput } from "./TransactionUpdateManyWithoutCryptoCurrenciesInput";

export type CryptoCurrencyUpdateInput = {
  accounts?: AccountUpdateManyWithoutCryptoCurrenciesInput;
  marketCap?: number | null;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionUpdateManyWithoutCryptoCurrenciesInput;
};
