import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "./Users.entity";

@Entity("address_user")
export class AddressUserEntity{
    
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    street : string

    @Column()
    number : number

    @Column()
    zip : string

    @Column()
    city : string

    @OneToOne(() => UsersEntity, user => user.address, { cascade : ["insert", "update"]})
    user : UsersEntity
}