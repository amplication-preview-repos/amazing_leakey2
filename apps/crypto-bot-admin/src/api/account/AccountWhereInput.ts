import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CryptoCurrencyWhereUniqueInput } from "../cryptoCurrency/CryptoCurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  balance?: FloatNullableFilter;
  cryptoCurrency?: CryptoCurrencyWhereUniqueInput;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
