import { Module } from "@nestjs/common";
import { CryptoCurrencyModuleBase } from "./base/cryptoCurrency.module.base";
import { CryptoCurrencyService } from "./cryptoCurrency.service";
import { CryptoCurrencyController } from "./cryptoCurrency.controller";
import { CryptoCurrencyResolver } from "./cryptoCurrency.resolver";

@Module({
  imports: [CryptoCurrencyModuleBase],
  controllers: [CryptoCurrencyController],
  providers: [CryptoCurrencyService, CryptoCurrencyResolver],
  exports: [CryptoCurrencyService],
})
export class CryptoCurrencyModule {}
