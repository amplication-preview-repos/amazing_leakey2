import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BotCommandWhereInput = {
  commandText?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  parameters?: JsonFilter;
};
