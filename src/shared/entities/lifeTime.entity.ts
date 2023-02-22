import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm"

export class LifeTime{
    
    @DeleteDateColumn()
    deleteAt : Date


    @UpdateDateColumn()
    updateAt : Date

    @CreateDateColumn()
    createdAt : Date
}