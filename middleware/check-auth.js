export default function (context) {
  context.store.dispatch("auth/autoLogin", context.req);
}
