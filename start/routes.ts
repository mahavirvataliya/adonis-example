/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import ActivityLog from 'App/Models/ActivityLog'
import { DateTime } from 'luxon'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/logs', async () => {
  const logs = await ActivityLog.all();
  return logs;
})

Route.post('/logs', async ({ request }) => {
  const data = request.body();
  const log = new ActivityLog();
  log.activity = data.activity;
  log.ip_address = data.ip_address;
  log.user_id = data.user_id;
  log.email = data.email;
  log.username = data.username;
  log.points = data.points || 0;
  log.streaks = data.streaks || 0;
  log.record_created_at = DateTime.local();
  log.record_updated_at = DateTime.local();
  await log.save()
  return log;
})
