import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn()
  create_at?: Date;

  @UpdateDateColumn()
  update_at?: Date;

  @Column({ type: 'text', nullable: true })
  note?: string;
}
