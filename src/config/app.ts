import {setEnv} from '../utils';

/**
 * Api Server 
 * Specified host or server path to the APIs.
 */
export const apiServer = setEnv("https://localhost:3030");

/**
 * API Timeout
 * This timeout time when calling APIs, the time set to milisecond
 * this default to 120000 (2 minutes).
 */
export const apiTimeout = setEnv(120000);

/** 
 * The authentication token name
 * This token name that will store to localStorage, sessionStorage, or Cookies HttpOnly
 */
export const authTokenName = setEnv("auth_token");

/**
 * loginUrl
 * The specific login url path.
 */
export const loginUrl = setEnv("/login");

/**
 * forbiddenUrl
 * The specific forbidden url path for forbidden page. 
 */
export const forbiddenUrl = setEnv("/forbidden");

/**
 * Default Language
 * This default language callback
 */
export const defaultLang = setEnv("en-US");

/**
 * i18n Debug Mode
 * Internationalization debug mode
 */
export const i18nDebugMode = setEnv(false, true, { productionOnly: true });