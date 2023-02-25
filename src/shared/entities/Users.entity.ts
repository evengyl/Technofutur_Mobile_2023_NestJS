import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { AddressUserEntity } from "./AddressUser.entity"
import { GardensEntity } from "./Gardens.entity"
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

    @OneToMany(() => GardensEntity, (gardens) => gardens.user, { cascade : ["insert", "update"]})
    gardens : GardensEntity[]

    @OneToOne(() => AddressUserEntity, (address) => address.user, { cascade : ["insert", "update"]})
    address : AddressUserEntity
}