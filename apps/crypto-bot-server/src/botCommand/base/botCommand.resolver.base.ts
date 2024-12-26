/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BotCommand } from "./BotCommand";
import { BotCommandCountArgs } from "./BotCommandCountArgs";
import { BotCommandFindManyArgs } from "./BotCommandFindManyArgs";
import { BotCommandFindUniqueArgs } from "./BotCommandFindUniqueArgs";
import { CreateBotCommandArgs } from "./CreateBotCommandArgs";
import { UpdateBotCommandArgs } from "./UpdateBotCommandArgs";
import { DeleteBotCommandArgs } from "./DeleteBotCommandArgs";
import { BotCommandService } from "../botCommand.service";
@graphql.Resolver(() => BotCommand)
export class BotCommandResolverBase {
  constructor(protected readonly service: BotCommandService) {}

  async _botCommandsMeta(
    @graphql.Args() args: BotCommandCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BotCommand])
  async botCommands(
    @graphql.Args() args: BotCommandFindManyArgs
  ): Promise<BotCommand[]> {
    return this.service.botCommands(args);
  }

  @graphql.Query(() => BotCommand, { nullable: true })
  async botCommand(
    @graphql.Args() args: BotCommandFindUniqueArgs
  ): Promise<BotCommand | null> {
    const result = await this.service.botCommand(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BotCommand)
  async createBotCommand(
    @graphql.Args() args: CreateBotCommandArgs
  ): Promise<BotCommand> {
    return await this.service.createBotCommand({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BotCommand)
  async updateBotCommand(
    @graphql.Args() args: UpdateBotCommandArgs
  ): Promise<BotCommand | null> {
    try {
      return await this.service.updateBotCommand({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BotCommand)
  async deleteBotCommand(
    @graphql.Args() args: DeleteBotCommandArgs
  ): Promise<BotCommand | null> {
    try {
      return await this.service.deleteBotCommand(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}