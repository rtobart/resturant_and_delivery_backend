import * as dotenv from 'dotenv'
dotenv.config()
const {
  FIREBASE_ADMIN_TYPE,
  FIREBASE_ADMIN_PROJECT_ID,
  FIREBASE_ADMIN_PRIVATE_KEY_ID,
  FIREBASE_ADMIN_PRIVATE_KEY,
  FIREBASE_ADMIN_CLIENT_EMAIL,
  FIREBASE_ADMIN_CLIENT_ID,
  FIREBASE_ADMIN_AUTH_URI,
  FIREBASE_ADMIN_TOKEN_URI,
  FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_ADMIN_CLIENT_X509_CERT_URL
} = process.env
const config = {
  options: {
    type: FIREBASE_ADMIN_TYPE,
    project_id: FIREBASE_ADMIN_PROJECT_ID,
    private_key_id: FIREBASE_ADMIN_PRIVATE_KEY_ID,
    private_key: FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    client_email: FIREBASE_ADMIN_CLIENT_EMAIL,
    client_id: FIREBASE_ADMIN_CLIENT_ID,
    auth_uri: FIREBASE_ADMIN_AUTH_URI,
    token_uri: FIREBASE_ADMIN_TOKEN_URI,
    auth_provider_x509_cert_url: FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: FIREBASE_ADMIN_CLIENT_X509_CERT_URL
  }
}

export { config }

