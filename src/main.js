import { createApp } from "vue";
import App from "./App.vue";
import "./scss/index.scss";
import { createPinia } from "pinia";
import router from "./router";

import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://36b24830a62d401f91af985a033ef61e@o1127381.ingest.sentry.io/6169238",
  logErrors: true,
  // eslint-disable-next-line no-undef
  release: __SENTRY_RELEASE__,
  environment: import.meta.env.MODE,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.2,
});

app.use(createPinia()).use(router).mount("#app");

const user = {
  email: "gabrielcaianaguedes@gmail.com",
};
Sentry.setUser(user);
Sentry.configureScope((scope) => scope.setUser(null));
