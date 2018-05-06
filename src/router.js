/**
 * used for routing of different policy
 */

class RouteBuilder {
    constructor() { }

    buildRouter(level, policy) {
        switch (policy) {
            case 'ELEVATOR_REPORT': {
                break;
            }
            
            case 'SCHEDULER_TRANSFER': {
                break;
            }

            case 'CALL_ELEVATOR': {
                break;
            }
        }
    }
}

class Router {
    constructor(level, policy) {
        this.level = level;
        this.policy = policy;
    }
}

/**
 * all routers have fixed routing table
 */
class ElevatorReportRouter extends Router {
    route(source) {
        
    }
}