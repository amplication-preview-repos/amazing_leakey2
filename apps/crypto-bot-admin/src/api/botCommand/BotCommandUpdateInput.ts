import { InputJsonValue } from "../../types";

export type BotCommandUpdateInput = {
  commandText?: string | null;
  description?: string | null;
  parameters?: InputJsonValue;
};
