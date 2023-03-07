module.exports = {
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "preset": "conventionalcommits",
            "releaseRules": [
                {"type": "revert", "section":"Reverts", "hidden": false},
                {"type": "feat", "section": "Features", "hidden": false},
                {"type": "fix", "section": "Bug Fixes", "hidden": false},
                {"type": "improvement", "section": "Feature Improvements", "hidden": false},
                {"type": "docs", "section":"Docs", "hidden": false},
                {"type": "style", "section":"Styling", "hidden": false},
                {"type": "refactor", "section":"Code Refactoring", "hidden": false},
                {"type": "perf", "section":"Performance Improvements", "hidden": false},
                {"type": "test", "section":"Tests", "hidden": false},
                {"type": "build", "section":"Build System", "hidden": false},
                {"type": "ci", "section":"CI", "hidden":false}
            ]
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