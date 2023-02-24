import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { LifeTime } from "./lifeTime.entity"
import { UsersEntity } from "./Users.entity"

@Entity("gardens")
export class GardensEntity extends LifeTime{
    
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    taille : number

    @Column()
    x : number

    @Column()
    y : number


    @ManyToOne(() => UsersEntity, (users) => users.gardens, { cascade : ["insert", "update"]})
    @JoinColumn()
    user : UsersEntity
}