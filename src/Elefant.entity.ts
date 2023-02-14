import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Elefant {
  @PrimaryGeneratedColumn()
  elefantid: number;

  @Column()
  elefantname: string;

  @Column()
  elefantgender: string;

  @Column()
  elefantweight: number;
}
