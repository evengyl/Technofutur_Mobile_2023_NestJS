import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { LifeTime } from "./lifeTime.entity"

@Entity("users")
export class UsersEntity extends LifeTime{
    
    @PrimaryGeneratedColumn()
    id : number

    @Column({ length : 50, nullable : false}) //attention que nullable est a false de base ! juste pour exemple
    name : string

    @Column({ unique : true, length : 15})
    pseudo : string

    @Column({ unique : true })
    password : string


}