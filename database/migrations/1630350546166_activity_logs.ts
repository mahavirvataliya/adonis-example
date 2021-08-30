import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActivityLogs extends BaseSchema {
  protected tableName = 'activity_logs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('user_id').nullable()
      table.string('activity').nullable()
      table.string('ip_address').nullable()
      table.string('email').nullable()
      table.string('username').nullable()
      table.bigInteger('points').defaultTo(0)
      table.bigInteger('streaks').defaultTo(0)
      table.dateTime('record_created_at', { useTz: true })
      table.dateTime('record_updated_at', { useTz: true })
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
