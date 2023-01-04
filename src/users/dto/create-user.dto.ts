import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({example: 'email@email.com', description: 'unique email'})
   readonly email: string
  @ApiProperty({example: '123', description: 'password'})
  readonly password: string
}
