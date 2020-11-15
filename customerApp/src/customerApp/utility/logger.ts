export interface ILogger {
    log();
}
export class baseLogger implements ILogger {
    log() {
        console.log("base logger");
    }
}
export class consoleLogger extends baseLogger {
    log() {
        console.log("console logger");
    }
}

export class dbLogger extends baseLogger {
    log() {
        console.log("db logger");
    }
}

export class fileLogger extends baseLogger {
    log() {
        console.log("file logger");
    }
}
