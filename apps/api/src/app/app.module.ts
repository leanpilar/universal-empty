import { Module } from '@nestjs/common';

import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../../../front/src/main.server';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const viewsPath = join(process.cwd(), 'dist', 'apps', 'front', 'browser')
const renderPath = join(process.cwd(), 'apps', 'front', 'src', 'app')

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath,
      renderPath,
    }),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})
export class AppModule {
  constructor() {
    console.log(renderPath);
  }
}
