import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
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
}