(function (window) {
   // let d = new Date();
   // let release=d.getFullYear+d.getMonth+d.getDate+ "Release-0.1.2V"
    window.__env = window.__env || {};

    // API url
    window.__env.apiBaseUrl = 'http://10.50.1.4:8084/';
    // window.__env.apiBaseUrl = 'http://localhost:8084/';


    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;

    window.__env.releaseNumber = 'Release - 20200519-0.1.3V'

}(this));
