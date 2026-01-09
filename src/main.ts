import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './app/core/services/config.service';

// Extiende la configuración para inicializar el servicio
const extendedConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => () => config.loadConfig(),
      deps: [ConfigService],
      multi: true
    }
  ]
};

bootstrapApplication(AppComponent,extendedConfig)
  .catch((err) => console.error(err));
