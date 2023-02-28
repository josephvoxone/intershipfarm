import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'mitras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.string('phone', 255).notNullable()
      table.string('address', 255).notNullable()
      table.string('city', 255).notNullable()
      table.dateTime('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.dateTime('updated_at', { useTz: true })
      table.dateTime('deleted_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
