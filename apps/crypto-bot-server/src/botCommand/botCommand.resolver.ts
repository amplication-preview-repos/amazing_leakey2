import * as graphql from "@nestjs/graphql";
import { BotCommandResolverBase } from "./base/botCommand.resolver.base";
import { BotCommand } from "./base/BotCommand";
import { BotCommandService } from "./botCommand.service";

@graphql.Resolver(() => BotCommand)
export class BotCommandResolver extends BotCommandResolverBase {
  constructor(protected readonly service: BotCommandService) {
    super(service);
  }
}
