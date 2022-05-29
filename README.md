# modrinth-api

## Installation

`npm install modrinth-api`

## Examples

**Get info about a mod or modpack**

```javascript
const modrinth = require("modrinth-api");

modrinth.getMod("Mod or modpack id/slug").then((result) => {
    console.log(result);
});
```

**Search for mods or modpacks**

```javascript
const modrinth = require("modrinth-api");

modrinth.getSearch({ limit: "2", offset: "2" }).then((result) => {
    console.log(result);
});
```
[More info on search](https://docs.modrinth.com/api-spec/#operation/searchProjects)
(Version is not available here.)

**Get all versions from mods or modpacks**

```javascript
const modrinth = require("modrinth-api");

modrinth.getModVersions("Mod or modpack id/slug").then((result) => {
    console.log(result);
});
```

**Get all versions from mods or modpacks**

```javascript
const modrinth = require("modrinth-api");

modrinth.getModVersion("Version id").then((result) => {
    console.log(result);
});
```