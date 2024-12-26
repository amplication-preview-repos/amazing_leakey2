import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BotCommandServiceBase } from "./base/botCommand.service.base";

@Injectable()
export class BotCommandService extends BotCommandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
