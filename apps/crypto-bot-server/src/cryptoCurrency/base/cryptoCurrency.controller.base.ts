/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CryptoCurrencyService } from "../cryptoCurrency.service";
import { CryptoCurrencyCreateInput } from "./CryptoCurrencyCreateInput";
import { CryptoCurrency } from "./CryptoCurrency";
import { CryptoCurrencyFindManyArgs } from "./CryptoCurrencyFindManyArgs";
import { CryptoCurrencyWhereUniqueInput } from "./CryptoCurrencyWhereUniqueInput";
import { CryptoCurrencyUpdateInput } from "./CryptoCurrencyUpdateInput";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class CryptoCurrencyControllerBase {
  constructor(protected readonly service: CryptoCurrencyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CryptoCurrency })
  async createCryptoCurrency(
    @common.Body() data: CryptoCurrencyCreateInput
  ): Promise<CryptoCurrency> {
    return await this.service.createCryptoCurrency({
      data: data,
      select: {
        createdAt: true,
        id: true,
        marketCap: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CryptoCurrency] })
  @ApiNestedQuery(CryptoCurrencyFindManyArgs)
  async cryptoCurrencies(
    @common.Req() request: Request
  ): Promise<CryptoCurrency[]> {
    const args = plainToClass(CryptoCurrencyFindManyArgs, request.query);
    return this.service.cryptoCurrencies({
      ...args,
      select: {
        createdAt: true,
        id: true,
        marketCap: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CryptoCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cryptoCurrency(
    @common.Param() params: CryptoCurrencyWhereUniqueInput
  ): Promise<CryptoCurrency | null> {
    const result = await this.service.cryptoCurrency({
      where: params,
      select: {
        createdAt: true,
        id: true,
        marketCap: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CryptoCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCryptoCurrency(
    @common.Param() params: CryptoCurrencyWhereUniqueInput,
    @common.Body() data: CryptoCurrencyUpdateInput
  ): Promise<CryptoCurrency | null> {
    try {
      return await this.service.updateCryptoCurrency({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          marketCap: true,
          name: true,
          symbolField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CryptoCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCryptoCurrency(
    @common.Param() params: CryptoCurrencyWhereUniqueInput
  ): Promise<CryptoCurrency | null> {
    try {
      return await this.service.deleteCryptoCurrency({
        where: params,
        select: {
          createdAt: true,
          id: true,
          marketCap: true,
          name: true,
          symbolField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/accounts")
  @ApiNestedQuery(AccountFindManyArgs)
  async findAccounts(
    @common.Req() request: Request,
    @common.Param() params: CryptoCurrencyWhereUniqueInput
  ): Promise<Account[]> {
    const query = plainToClass(AccountFindManyArgs, request.query);
    const results = await this.service.findAccounts(params.id, {
      ...query,
      select: {
        balance: true,
        createdAt: true,

        cryptoCurrency: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/accounts")
  async connectAccounts(
    @common.Param() params: CryptoCurrencyWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        connect: body,
      },
    };
    await this.service.updateCryptoCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/accounts")
  async updateAccounts(
    @common.Param() params: CryptoCurrencyWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        set: body,
      },
    };
    await this.service.updateCryptoCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/accounts")
  async disconnectAccounts(
    @common.Param() params: CryptoCurrencyWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        disconnect: body,
      },
    };
    await this.service.updateCryptoCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: CryptoCurrencyWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        amount: true,
        createdAt: true,

        cryptoCurrency: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  async connectTransactions(
    @common.Param() params: CryptoCurrencyWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateCryptoCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: CryptoCurrencyWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateCryptoCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: CryptoCurrencyWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateCryptoCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }
}