/**
 * cmds:
 * grow:    search and send friend requests on your behalf (aka grow your network)
 * invite:  search by the given template, within your existing network, those that matches and send them a chat message inviting them to a company
 * referr:  collect those of your network who are interested, grab their PDF resume and send it to the specified referrer (ex. austin)
 * analyze: analyze existing members of your network that match the given template (extract github,age (by pic),chat history,experience,etc.)
 */
export default class hola {
    constructor(arg?: {
        silent?: boolean;
    });
    test(arg: any): Promise<void>;
    templates(arg: any): Promise<void>;
    grow(arg: any): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map