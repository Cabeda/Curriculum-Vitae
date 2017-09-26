
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import * as jquery from 'jquery';
window['jQuery'] = window['$'] = jquery;

import * as tether from 'tether';
window['Tether'] = tether;

if (environment.production) {
  enableProdMode();
}


const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

jquery(() => bootstrap());

