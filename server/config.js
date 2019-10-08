module.exports = {
    // Port to run on. Can be overriden with '--port' launch parameter.  Not used if launched with '--sessionID'.
    port: 3000,

    // Logging settings.
    logging: {
        logLevel: 'info',
        persist: false,
        // Things to not log.
        filters: {
        }
    },
    // WebSocket Server settings.
    websocket: {
        // # of seconds to send keep-alive pings.
        keepAlive: 30,
        // The maximum allowed message size in bytes.
        maxPayload: 66000,
        // Enable/disable permessage-deflate compression of websocket frames.
        perMessageDeflate: true
    },
    // Settings for the appServer
    appServer: {
        port: 9080,
        protocol: "http",
        host: "localhost",
        rejectUnauthorized: false
    },
    // Configure how long the session lives without client connections.
    connectionWaitTimes: {
        // # of seconds that a disconnected session stays.
        disconnected: 5 * 60,
        // # of seconds to wait for the first initial connection.  If not set, defaults to 'disconnected' time.
        firstconnect: 3 * 60
    }
};
