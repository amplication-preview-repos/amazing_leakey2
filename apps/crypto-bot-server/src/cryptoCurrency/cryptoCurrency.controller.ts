import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CryptoCurrencyService } from "./cryptoCurrency.service";
import { CryptoCurrencyControllerBase } from "./base/cryptoCurrency.controller.base";

@swagger.ApiTags("cryptoCurrencies")
@common.Controller("cryptoCurrencies")
export class CryptoCurrencyController extends CryptoCurrencyControllerBase {
  constructor(protected readonly service: CryptoCurrencyService) {
    super(service);
  }
}
