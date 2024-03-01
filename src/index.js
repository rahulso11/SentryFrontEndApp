import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Import and init Sentry SDK
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://53ef637ef33ce2c1659c5b68fa57e686@o4506828893913088.ingest.sentry.io/4506830453080064",
  integrations: [
    Sentry.browserTracingIntegration(),
	Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
	//new Sentry.BrowserTracing({}),
	//new Sentry.Replay(),
  ],
  // Performance Monitoring
  profilesSampleRate: 1.0,
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["EC2AMAZ-CHIJMME", /^https:\/\/EC2AMAZ-CHIJMME/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
 
// original const container = document.getElementById("app");
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

/* Below is original code
Sentry.init({
  dsn: "https://35eb6eee6200527d1a434e24d286dc46@o4506828893913088.ingest.sentry.io/4506829013647360",
  // Rahul's URL https://35eb6eee6200527d1a434e24d286dc46@o4506828893913088.ingest.sentry.io/4506829013647360
  // original dsn: "https://2f4e649d19e64637903b24e784c7a4f2@o4505201972871168.ingest.sentry.io/4505523376553985",
  
  integrations: [new Sentry.BrowserTracing({}), new Sentry.Replay()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);*/