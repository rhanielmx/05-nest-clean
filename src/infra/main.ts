import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import type { EnvService } from './env/env.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const envService = app.get<EnvService>(ConfigService)
  const port = envService.get('PORT')

  await app.listen(port)
}
bootstrap()
