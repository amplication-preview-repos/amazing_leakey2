import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CryptoCurrencyWhereUniqueInput } from "../cryptoCurrency/CryptoCurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  cryptoCurrency?: CryptoCurrencyWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  timestamp?: DateTimeNullableFilter;
};
