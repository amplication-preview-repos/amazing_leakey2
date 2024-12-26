import { BotCommandWhereInput } from "./BotCommandWhereInput";
import { BotCommandOrderByInput } from "./BotCommandOrderByInput";

export type BotCommandFindManyArgs = {
  where?: BotCommandWhereInput;
  orderBy?: Array<BotCommandOrderByInput>;
  skip?: number;
  take?: number;
};
