// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import { EggAppConfig } from 'egg';
import ExportConfigDefault from '../../config/config.default';
import ExportConfigLocal from '../../config/config.local';
import ExportConfigProd from '../../config/config.prod';
import ExportConfig from '../../config/config';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
type ConfigLocal = ReturnType<typeof ExportConfigLocal>;
type ConfigProd = ReturnType<typeof ExportConfigProd>;
type Config = typeof ExportConfig;
type NewEggAppConfig = EggAppConfig & ConfigDefault & ConfigLocal & ConfigProd & Config;

declare module 'egg' {
  interface Application {
    config: NewEggAppConfig;
  }

  interface Controller {
    config: NewEggAppConfig;
  }

  interface Service {
    config: NewEggAppConfig;
  }
}