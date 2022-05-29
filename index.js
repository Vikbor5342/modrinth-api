const https = require("https");
const Mod = require("./objects/Mod");
const Version = require("./objects/Version");

const base_url = "https://api.modrinth.com/v2/";

function innerGet(
	url,
	PARSE = true
) {
	return new Promise((resolve, reject) => {
		https.get(url, function (response) {
			if (response && response.statusCode === 200) {
				let data = "";
				response.on("data", (chunk) => {
					data += chunk;
				});

				response.on("end", () => {
					if (PARSE) resolve(JSON.parse(data));
					else resolve(data);
				});
			} else {
				reject(response.statusCode);
			}
		});
	});
}

module.exports.getMod = function (identifier, callback) {
	let promise = innerGet(base_url + "project/" + identifier, function (obj) {
		return new Mod(obj);
	});
	if (callback && typeof callback === "function")
		promise.then(callback.bind(null, null), callback);
	return promise;
};

module.exports.getModVersions = function (identifier, callback) {
	let promise = innerGet(
		base_url + "project/" + identifier + "/version",
		function (obj) {
			let files = [];
			for (let f of Object.values(obj)) {
				files.push(new Version(f));
			}
			return files;
		}
	);
	if (callback && typeof callback === "function")
		promise.then(callback.bind(null, null), callback);
	return promise;
};

module.exports.getModVersion = function (identifier, callback) {
	let promise = innerGet(
		base_url + "version/" + identifier,
		function (obj) {
			let files = [];
			for (let f of Object.values(obj)) {
				files.push(new Version(f));
			}
			return files;
		}
	);
	if (callback && typeof callback === "function")
		promise.then(callback.bind(null, null), callback);
	return promise;
};

module.exports.getSearch = function (identifier, callback) {
	var qp = "?";
	if(identifier.query) qp += "&query="+identifier.query;
	if(identifier.facets) qp += "&facets="+identifier.facets;
	if(identifier.index) qp += "&index="+identifier.index;
	if(identifier.offset) qp += "&offset="+identifier.offset;
	if(identifier.limit) qp += "&limit="+identifier.limit;
	if(identifier.filters) qp += "&filters="+identifier.filters;
	let promise = innerGet(
		base_url + "search" + qp,
		function (obj) {
			return obj;
		}
	);
	if (callback && typeof callback === "function")
		promise.then(callback.bind(null, null), callback);
	return promise;
};