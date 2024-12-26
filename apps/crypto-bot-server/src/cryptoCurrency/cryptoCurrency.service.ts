import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CryptoCurrencyServiceBase } from "./base/cryptoCurrency.service.base";

@Injectable()
export class CryptoCurrencyService extends CryptoCurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
