const REQUIRED_ENV_VARS = ['COGNITO_USER_POOL_ID', 'COGNITO_CLIENT_ID'] as const;

type RequiredEnvKey = (typeof REQUIRED_ENV_VARS)[number];
type EnvValues = Record<RequiredEnvKey, string>;

let cachedEnv: EnvValues | null = null;

function validateEnv(): EnvValues {
  const missingVars: RequiredEnvKey[] = [];
  const values = {} as EnvValues;

  for (const key of REQUIRED_ENV_VARS) {
    const value = process.env[key];

    if (!value) {
      missingVars.push(key);
      continue;
    }

    values[key] = value;
  }

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variable${missingVars.length === 1 ? '' : 's'}: ${missingVars.join(
        ', ',
      )}. Update your .env file and restart the server.`,
    );
  }

  return values;
}

export function getEnv(): EnvValues {
  if (cachedEnv) {
    return cachedEnv;
  }

  cachedEnv = validateEnv();

  return cachedEnv;
}
