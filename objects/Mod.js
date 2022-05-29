module.exports = class {
	constructor(object) {
		this.slug = object.slug;
		this.id = object.id;
		this.title = object.title;
		this.description = object.description;
		this.categories = object.categories || [];
		this.client_side = object.client_side;
		this.server_side = object.server_side;
		this.body = object.body;
		this.issues_url = object.issues_url;
		this.source_url = object.source_url;
		this.wiki_url = object.wiki_url;
		this.discord_url = object.discord_url;
		this.donation_urls = object.donation_urls || [];
		this.project_type = object.project_type;
		this.downloads = object.downloads;
		this.logo_url = object.icon_url;
		this.team_id = object.team;
		this.body_url = object.body_url;
		this.moderator_message = object.moderator_message;
		this.updated = object.updated;
		this.created = object.published;
		this.followers = object.followers;
		this.status = object.status;
		this.license = object.license || {};
		this.versions = object.versions || [];
		this.gallery = object.gallery || [];
	}
};