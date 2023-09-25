import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator";


export class CreateUserDTO {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  //Decorando password para validar somente se a senha tem 6 dígitos
  @IsString()
  @IsStrongPassword({
    minLength: 6,
    minNumbers: 0,
    minLowercase: 0,
    minUppercase: 0,
    minSymbols: 0
  })
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt: string
}