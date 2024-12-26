/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountCreateNestedManyWithoutCryptoCurrenciesInput } from "./AccountCreateNestedManyWithoutCryptoCurrenciesInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TransactionCreateNestedManyWithoutCryptoCurrenciesInput } from "./TransactionCreateNestedManyWithoutCryptoCurrenciesInput";

@InputType()
class CryptoCurrencyCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountCreateNestedManyWithoutCryptoCurrenciesInput,
  })
  @ValidateNested()
  @Type(() => AccountCreateNestedManyWithoutCryptoCurrenciesInput)
  @IsOptional()
  @Field(() => AccountCreateNestedManyWithoutCryptoCurrenciesInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutCryptoCurrenciesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  marketCap?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  symbolField?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutCryptoCurrenciesInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutCryptoCurrenciesInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutCryptoCurrenciesInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutCryptoCurrenciesInput;
}

export { CryptoCurrencyCreateInput as CryptoCurrencyCreateInput };