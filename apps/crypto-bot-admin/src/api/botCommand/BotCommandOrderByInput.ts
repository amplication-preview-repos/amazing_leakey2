import { SortOrder } from "../../util/SortOrder";

export type BotCommandOrderByInput = {
  commandText?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  parameters?: SortOrder;
  updatedAt?: SortOrder;
};
