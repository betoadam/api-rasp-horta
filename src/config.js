global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports = {
    connectionString: 'mongodb://localhost:27017/HORTA?readPreference=primary',
    sendgridKey: 'SUA CHAVE',
    containerConnectionString: 'SUA CONNECTION STRING'
}