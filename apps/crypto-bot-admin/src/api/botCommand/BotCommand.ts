import { JsonValue } from "type-fest";

export type BotCommand = {
  commandText: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  parameters: JsonValue;
  updatedAt: Date;
};
