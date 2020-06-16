import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiBaseUrl = 'DEFAULT_API';

  // Whether or not to enable debug mode
  public enableDebug = true;

  public releaseNumber = 'DEFAULT_RELEASE'

  constructor() {
  }

}