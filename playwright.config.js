import { defineConfig } from "@playwright/test";
import { loadEnvFile } from "node:process";
import {existsSync} from "node:fs"
import envValidator from "./utils/envValidator";

//Load env for local execution. Ignore in CI
if (existsSync('.env')){
    loadEnvFile('.env');
}

//Check env variables
await envValidator();

export default defineConfig({
  
  testDir : './tests',
  timeout : 30*1000,
  expect :{
    timeout : 10*1000
  },
  reporter : 'html',
  use:{
    browserName : 'chromium',
    headless : true,
    trace : 'on',
    baseURL: process.env.BASE_URL,
    actionTimeout : 10*1000
  }
});
