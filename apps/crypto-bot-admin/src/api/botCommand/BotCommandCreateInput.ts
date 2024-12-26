import { InputJsonValue } from "../../types";

export type BotCommandCreateInput = {
  commandText?: string | null;
  description?: string | null;
  parameters?: InputJsonValue;
};
