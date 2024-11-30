# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Types of changes

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for soon-to-be removed features.
* `Removed` for now removed features.
* `Fixed` for any bug fixes.
* `Security` in case of vulnerabilities.


## [1.2.2] - 2024-11-30

### Fixed

- Fix race condition in the analysis window. We had multiple copies.
- Fix bug where logger.js wasn't really added to the extension package :/

## [1.2.1] - 2024-11-08

### Fixed

- Added 'logger.js' to the bin/zip-extension script to ensure it's included in the
  extension package.

## [1.2.0] - 2024-10-31

### Fixed

- Added CONTRIBUTING.md file to help contributors understand how to contribute
- Logging is now disabled in production. You can enable it by creating an
  empty `devel` file in the project root directory. This file is in the `.gitignore`
  file to ensure it's not accidentally committed.

## [1.1.0] - 2024-10-31

### Added

- We can now have our response in the language of our choice. For now, it's a
  subset of Germanic and Romance languages because GenAI seems to work better
  with them. We've tried repeatedly to get it to work with the language the source
  text is written in, but failed. We're working on it.

### Fixed

- Make sure previous analysis window is cleared before running a new one
- Updated the CSS to ensure we have consistent formatting and don't pick
  up the style of the source text

## [1.0.1] - 2024-10-31

### Changed

- Doubled return tokens to 4096
- Relaxed safety checks on output (because when you're analyzing content, you
  don't want Gemini saying "no" when you've explicitly asked for an analysis)
- Added more detail on how to structure the response, starting with a disclaimer

### Added

- When possible, response now includes links to reliable sources for more information

## [1.0.0] - 2024-10-30

### Added
- Errors now let users see full JSON response
- Added help page
- Ability to change or delete API keys

## No version number - 2024-10-29

### Added

- Initial feature set
- README file
