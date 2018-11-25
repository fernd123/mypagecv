interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'VlIk1PvyK9vV4JDZYn4A1vJp7Nc9TzbN',
  domain: 'frodriguez.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
