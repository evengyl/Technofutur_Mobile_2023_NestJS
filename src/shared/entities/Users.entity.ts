import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class UsersEntity{
    
    @PrimaryGeneratedColumn()
    id : number

    @Column({ length : 50, nullable : false}) //attention que nullable est a false de base ! juste pour exemple
    name : string

    @Column({ unique : true, length : 15})
    pseudo : string

    @Column({ unique : true, type : "text"})
    password : string
}