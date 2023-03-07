module.exports = {
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "preset": "angular",
            "releaseRules": [
                {"type": "docs", "release": "patch"},
                {"type": "refactor", "release": "patch"},
                {"type": "style", "release": "patch"}
            ],
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/github",
        ["@semantic-release/git", {
            "assets": [
              "package.json",
              "package-lock.json",
              "CHANGELOG.md"
            ],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }]
    ],
    "branches": [
        "main"
    ],
}