/**
 * All Backend Api endpoints
 */
const baseUrl = 'https://good-newt-sneakers.cyclic.app/api';

export const route = {
  SignUp: baseUrl + '/auth/register',
  SignIn: baseUrl + '/auth/signIn',
  Search: baseUrl + '/search',
  sendMail: baseUrl + '/message/mail',
  session: baseUrl + '/auth/session',
  user_del: baseUrl + '/user/delete/',
};
