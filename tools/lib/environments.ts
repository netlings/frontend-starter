export interface EnvironmentsInterface {
  DEVELOPMENT: string;
  PRODUCTION: string;
  [key: string]: string;
}

/**
 * The enumeration of available environments.
 * @type {EnvironmentsInterface}
 */
export const Environments: EnvironmentsInterface = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod'
};
