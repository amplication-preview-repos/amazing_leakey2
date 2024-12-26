import * as graphql from "@nestjs/graphql";
import { CryptoCurrencyResolverBase } from "./base/cryptoCurrency.resolver.base";
import { CryptoCurrency } from "./base/CryptoCurrency";
import { CryptoCurrencyService } from "./cryptoCurrency.service";

@graphql.Resolver(() => CryptoCurrency)
export class CryptoCurrencyResolver extends CryptoCurrencyResolverBase {
  constructor(protected readonly service: CryptoCurrencyService) {
    super(service);
  }
}
