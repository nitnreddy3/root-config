import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@appdirect/react-app",
  app: () => System.import( "@appdirect/react-app" ),
  activeWhen: [ "/react" ]
} );

registerApplication( {
  name: "angular-app",
  app: () => System.import( "angular-app" ),
  activeWhen: [ "/angular" ]
} );

start({
  urlRerouteOnly: true,
});
