
export const isProduction = process.env.NODE_ENV === "production" ? true : false;


type envOptions = {
  /** 
   * Set the param of config for production only
   * and the defaultParams for development
   */
  productionOnly?: boolean;
}

/**
 * Set Environtment Configuration Variable.
 * 
 * @param param Env config 
 * @param defaultParam Default env config
 * @param options options
 * @returns 
 */
export const setEnv = (param?: any, defaultParam?: any, options?: envOptions) => {
  let config = param
  if(defaultParam) {
    config = defaultParam
  }

  if(options?.productionOnly && isProduction) {
    return param;
  }

  return config
}
