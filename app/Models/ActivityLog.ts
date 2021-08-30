import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ActivityLog extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public record_created_at: DateTime

  @column.dateTime()
  public record_updated_at: DateTime

  @column()
  public email: string

  @column()
  public username: string

  @column()
  public activity: string

  @column()
  public ip_address: string

  @column()
  public user_id: string

  @column()
  public points: number

  @column()
  public streaks: number

}
