import { Column, DataType, Table, Model } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";


interface UserCreationAttrs {
   email: string
   password: string
}
@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{


   @ApiProperty({example: '1', description: 'unique id'})
   @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: string
  @ApiProperty({example: 'email@email.com', description: 'unique email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string
  @ApiProperty({example: '1234', description: 'password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

  @ApiProperty({example: 'true', description: 'if banned'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean

  @ApiProperty({example: 'reason', description: 'reason banned'})
     @Column({type: DataType.STRING, allowNull: true})
    banReason: string
}
