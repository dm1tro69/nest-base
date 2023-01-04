import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";


@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({summary: 'create User'})
  @ApiResponse({status: 201, type: User})
  @Post()
  createUser(@Body() dto: CreateUserDto){
     return this.userService.createUser(dto)
  }

  @ApiOperation({summary: 'get all Users'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAllUsers(){
    return this.userService.getAllUsers()
  }

}
