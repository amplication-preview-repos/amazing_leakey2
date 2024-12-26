import { BotCommand as TBotCommand } from "../api/botCommand/BotCommand";

export const BOTCOMMAND_TITLE_FIELD = "commandText";

export const BotCommandTitle = (record: TBotCommand): string => {
  return record.commandText?.toString() || String(record.id);
};
