module.exports = class {
	constructor(object) {
		this.id = object.id;
		this.project_id = object.project_id;
		this.author_id = object.author_id;
		this.featured = object.featured;
		this.version_name = object.name;
		this.release_type = object.version_number;
		this.game_versions = object.game_versions;
		this.loaders = object.loaders || [];
		this.changelog = object.changelog;
		this.changelog_url = object.changelog_url;
		this.timestamp = object.date_published;
		this.release_type = object.version_type;
		this.downloads = object.downloads;
		this.mod_dependencies = object.dependencies || [];
		this.files = object.files || [];
	}
};