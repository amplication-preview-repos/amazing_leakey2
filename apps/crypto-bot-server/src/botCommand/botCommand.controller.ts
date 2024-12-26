import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BotCommandService } from "./botCommand.service";
import { BotCommandControllerBase } from "./base/botCommand.controller.base";

@swagger.ApiTags("botCommands")
@common.Controller("botCommands")
export class BotCommandController extends BotCommandControllerBase {
  constructor(protected readonly service: BotCommandService) {
    super(service);
  }
}
