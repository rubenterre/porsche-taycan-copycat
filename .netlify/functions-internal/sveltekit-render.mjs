import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","apple-touch-icon-180x180.png","cars/.DS_Store","cars/front/frente-taycan-berlina.avif","cars/front/frente-taycan-cross.avif","cars/front/frente-taycan-sport.avif","cars/models/taycan-berlina.avif","cars/models/taycan-cross.avif","cars/models/taycan-sport.avif","favicon.png","fonts/PorscheNext-normal-400-100.ttf","fonts/PorscheNext-normal-600-100.ttf","fonts/PorscheNext-normal-700-100.ttf","fonts/PorscheNextWLa-normal-400-100.ttf","fonts/PorscheNextWLa-normal-700-100.ttf","icons/menu-icon.svg","icons/user-icon.svg","porsche-logo-small.webp","porsche-logo.svg","taycan_logo.svg","videos/video_fondo.mp4"]),
	mimeTypes: {".png":"image/png",".avif":"image/avif",".ttf":"font/ttf",".svg":"image/svg+xml",".webp":"image/webp",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.CNRa7gH9.js",app:"_app/immutable/entry/app.BQ-WBhWT.js",imports:["_app/immutable/entry/start.CNRa7gH9.js","_app/immutable/chunks/CvA5G6HS.js","_app/immutable/chunks/aRRer82z.js","_app/immutable/chunks/D5HOAbfn.js","_app/immutable/chunks/CzIztpkU.js","_app/immutable/entry/app.BQ-WBhWT.js","_app/immutable/chunks/aRRer82z.js","_app/immutable/chunks/BjVoeQLo.js","_app/immutable/chunks/CANIESbs.js","_app/immutable/chunks/CzIztpkU.js","_app/immutable/chunks/DoS_6h3g.js","_app/immutable/chunks/D5HOAbfn.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
