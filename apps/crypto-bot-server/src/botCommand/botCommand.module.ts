import { Module } from "@nestjs/common";
import { BotCommandModuleBase } from "./base/botCommand.module.base";
import { BotCommandService } from "./botCommand.service";
import { BotCommandController } from "./botCommand.controller";
import { BotCommandResolver } from "./botCommand.resolver";

@Module({
  imports: [BotCommandModuleBase],
  controllers: [BotCommandController],
  providers: [BotCommandService, BotCommandResolver],
  exports: [BotCommandService],
})
export class BotCommandModule {}
