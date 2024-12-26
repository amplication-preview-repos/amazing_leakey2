import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CryptoCurrencyWhereInput = {
  accounts?: AccountListRelationFilter;
  id?: StringFilter;
  marketCap?: FloatNullableFilter;
  name?: StringNullableFilter;
  symbolField?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
