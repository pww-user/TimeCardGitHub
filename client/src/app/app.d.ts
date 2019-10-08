declare module 'app/globaldata.service' {
	export class GlobalData {
	    /**
	     * Put any global data values you want to use across screens here, e.g.:
	     *
	     * myValue: string;
	     *
	     * Use "global.myValue" to refer to it in your screen template, or this.global.myValue in your controller.
	     */
	    value1: string;
	    value2: string;
	}

}
declare module 'app/screen' {
	import { GlobalData } from 'app/globaldata.service';
	import { BaseScreen } from 'smartux-client';
	export class Screen extends BaseScreen {
	    protected global: GlobalData;
	}

}
declare module 'app/menu/menu' {
	import { Screen } from 'app/screen';
	export class MenuComponent extends Screen {
	}

}
declare module 'app/app.screens' {
	/***  Generated file, do not change.  */
	import { MenuComponent } from 'app/menu/menu';
	import { login_PhonePortrait } from 'app/../pages/login/PhonePortrait/login';
	import { login_Desktop } from 'app/../pages/login/Desktop/login';
	import { login_TabletLandscape } from 'app/../pages/login/TabletLandscape/login';
	import { logintwofactor_PhonePortrait } from 'app/../pages/logintwofactor/PhonePortrait/logintwofactor';
	import { logintwofactor_Desktop } from 'app/../pages/logintwofactor/Desktop/logintwofactor';
	import { logintwofactor_TabletLandscape } from 'app/../pages/logintwofactor/TabletLandscape/logintwofactor';
	import { timeentry_PhonePortrait } from 'app/../pages/timeentry/PhonePortrait/timeentry';
	import { timeview_PhonePortrait } from 'app/../pages/timeview/PhonePortrait/timeview';
	import { commentsdaily_PhonePortrait } from 'app/../pages/commentsdaily/PhonePortrait/commentsdaily';
	import { commentsweek_PhonePortrait } from 'app/../pages/commentsweek/PhonePortrait/commentsweek';
	import { chooseproject_PhonePortrait } from 'app/../pages/chooseproject/PhonePortrait/chooseproject';
	import { chooseactivity_PhonePortrait } from 'app/../pages/chooseactivity/PhonePortrait/chooseactivity';
	import { menuicons_PhonePortrait } from 'app/../pages/menuicons/PhonePortrait/menuicons';
	import { previoustimecards_PhonePortrait } from 'app/../pages/previoustimecards/PhonePortrait/previoustimecards';
	import { recenttimecards_PhonePortrait } from 'app/../pages/recenttimecards/PhonePortrait/recenttimecards';
	import { recenttimecards_Desktop } from 'app/../pages/recenttimecards/Desktop/recenttimecards';
	import { settings_PhonePortrait } from 'app/../pages/settings/PhonePortrait/settings';
	export class Screens {
	    static declarations: typeof MenuComponent[];
	    static mapping: {
	        'login': {
	            PhonePortrait: typeof login_PhonePortrait;
	            Desktop: typeof login_Desktop;
	            TabletLandscape: typeof login_TabletLandscape;
	        };
	        'logintwofactor': {
	            PhonePortrait: typeof logintwofactor_PhonePortrait;
	            Desktop: typeof logintwofactor_Desktop;
	            TabletLandscape: typeof logintwofactor_TabletLandscape;
	        };
	        'timeentry': {
	            PhonePortrait: typeof timeentry_PhonePortrait;
	        };
	        'timeview': {
	            PhonePortrait: typeof timeview_PhonePortrait;
	        };
	        'commentsdaily': {
	            PhonePortrait: typeof commentsdaily_PhonePortrait;
	        };
	        'commentsweek': {
	            PhonePortrait: typeof commentsweek_PhonePortrait;
	        };
	        'chooseproject': {
	            PhonePortrait: typeof chooseproject_PhonePortrait;
	        };
	        'chooseactivity': {
	            PhonePortrait: typeof chooseactivity_PhonePortrait;
	        };
	        'menuicons': {
	            PhonePortrait: typeof menuicons_PhonePortrait;
	        };
	        'previoustimecards': {
	            PhonePortrait: typeof previoustimecards_PhonePortrait;
	        };
	        'recenttimecards': {
	            PhonePortrait: typeof recenttimecards_PhonePortrait;
	            Desktop: typeof recenttimecards_Desktop;
	        };
	        'settings': {
	            PhonePortrait: typeof settings_PhonePortrait;
	        };
	    };
	}

}
declare module 'app/app.hooks' {
	import { AppHooks } from 'smartux-client';
	export class Hooks extends AppHooks {
	    /**
	     * Initial parameters to send to the server.
	     */
	    getServerInitParams(): Promise<any>;
	    /**
	     * Initialize the UI with data from the server.
	     */
	    initializeUI(params: any): void;
	    /**
	     * Override what happens when going to a new screen.
	     */
	    overrideStateHandler(oldScreen: string, newScreen: string, data: any): string;
	    /**
	     * Override what happens when a custom URL scheme is called.
	     *
	     * type - 'event' is currently the only supported type.
	     * name - Name of event, e.g. 'login.submit'
	     * data - JSON object containing URL data.
	     *
	     * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
	     *          false - Don't continue with the normal flow.
	     */
	    interceptCustomURLScheme(type: string, name: string, data: any): Promise<boolean>;
	    /**
	     * Override what happens when there is a push notification.
	     *
	     * data - JSON object containing Notification data
	     *
	     * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
	     *          false - Don't continue with the normal flow.
	     */
	    onPushNotification(data: any): Promise<boolean>;
	    /**
	     * Error when an internal Push Notification error occurs and the cache is aborted.
	     */
	    onPushNotificationError(e: Error): Promise<void>;
	    /**
	     * Override what happens when on a file download event
	     * params - information about the download
	     * url - the url to download the file
	     * Returns: true - Continue with normal flow, e.g. download and try to open with
	     *                   the default application/ social share plugin
	     *          false - Don't continue with the normal flow.
	     */
	    onDownloadFile(params: any, url: any): Promise<boolean>;
	    /**
	     * Override what happens when the back button is pressed (Android)
	     * Returns: true - continue with the normal flow, e.g. exit the application
	     *          false - Don't continue with the normal flow.
	     */
	    onBackButton(): boolean;
	    /**
	     * Override what happens when the application enters the background
	     * Returns: true - continue witht the normal flow, e.g disconnect after the time
	     *                  specified in config.ts
	     *          false - don't continue with the normal flow.
	    */
	    onPause(): boolean;
	    /**
	     * Override what happens when the application enters the foreground
	     * Returns: true - continue witht the normal flow, e.g reconnect if disconnected
	     *          false - don't continue with the normal flow.
	    */
	    onResume(): boolean;
	    /**
	     * Override what happens when a request comes in to switch applications
	     * Returns: true - continue with the normal flow, e.g prompt the user
	     *          false - don't prompt the user, ignore the request
	     */
	    onSwitchSessionRequest(): boolean;
	}

}
declare module 'app/app.component' {
	import { Screen } from 'app/screen';
	import { Hooks } from 'app/app.hooks';
	import { TBootstrap } from 'smartux-client';
	export class ClientApp extends Screen {
	    constructor(bootstrap: TBootstrap, hooks: Hooks);
	}

}
declare module 'app/app.module' {
	export class AppModule {
	}

}
