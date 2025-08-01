/**
 * Algorithms for constants:
 *
 * - DEFAULT_BASE_FOLDER:
 *     1. Set a string value to use as the root folder for the plugin to avoid collision with existing vault folders.
 *
 * - DEFAULT_DIRECTORIES:
 *     1. Define an array of core directories (e.g., 'journal') for the minimal journal structure.
 *

 *
 * - DEFAULT_JOURNAL_STRUCTURE:
 *     1. Define a nested object representing the folder structure for journals, including years, months, and archive years.
 *

 *
 * - COMMAND_IDS:
 *     1. Map command names to unique string IDs for registering plugin commands.
 *
 * - RIBBON_BUTTONS:
 *     1. Define configuration objects for each ribbon button, including icon, title, and tooltip.
 *
 * - DATE_FORMATS:
 *     1. Define string patterns for formatting dates in journals, ISO, and folder names.
 *
 * - ERROR_MESSAGES:
 *     1. Map error types to user-friendly error messages for display.
 *
 * - REGEX_PATTERNS:
 *     1. Define regular expressions for matching wiki links, shortcodes, date filenames, and invalid filename characters.
 */

// Default base folder to prevent collision with existing vault structure
export const DEFAULT_BASE_FOLDER = 'DateFolders'

// Core directory structure - daily-notes by default (configurable)
export const DEFAULT_DIRECTORIES = ['daily-notes']

// Detailed daily-notes structure with new format matching user preferences
export const DEFAULT_JOURNAL_STRUCTURE = {
  'daily-notes': {
    Misc: null,
    '2025': {
      '01 January': null,
      '02 February': null,
      '03 March': null,
      '04 April': null,
      '05 May': null,
      '06 June': null,
      '07 July': null,
      '08 August': null,
      '09 September': null,
      '10 October': null,
      '11 November': null,
      '12 December': null,
      'Yearly List': null,
      'Yearly Log': null
    },
    z_Archives: {
      '2022': null,
      '2023': null,
      '2024': null
    }
  }
}

export const COMMAND_IDS = {
  REBUILD_DIRECTORY: 'rebuild-directory-structure',
  OPEN_TODAY_JOURNAL: 'open-today-journal',
  CREATE_TODAY_NOTE: 'create-today-note',
  CREATE_FUTURE_NOTE: 'create-future-note',
  CREATE_MONTHLY_FOLDERS: 'create-monthly-folders'
} as const

// Ribbon button configurations
export const RIBBON_BUTTONS = {
  TODAY_JOURNAL: {
    icon: 'calendar-days',
    title: "Open Today's Journal",
    tooltip: "Open or create today's journal entry"
  },
  MONTHLY_FOLDERS: {
    icon: 'folder-plus',
    title: 'Create Monthly Folders',
    tooltip: 'Create monthly folders for the current year'
  },
  REBUILD_STRUCTURE: {
    icon: 'folder-sync',
    title: 'Rebuild Directory Structure',
    tooltip: "Rebuild the plugin's directory structure"
  },
  PLUGIN_SETTINGS: {
    icon: 'settings',
    title: 'Link Plugin Settings',
    tooltip: 'Open Link Plugin settings'
  }
} as const

export const DATE_FORMATS = {
  DEFAULT_JOURNAL: 'YYYY-MM-DD dddd',
  ISO_DATE: 'YYYY-MM-DD',
  FOLDER_FORMAT: 'YYYY/MM'
} as const

export const ERROR_MESSAGES = {
  INVALID_PATH: 'Invalid file path provided',
  DIRECTORY_CREATE_FAILED: 'Failed to create directory',
  FILE_CREATE_FAILED: 'Failed to create file',
  SHORTCODE_PARSE_ERROR: 'Failed to parse shortcode',
  JOURNAL_CREATE_ERROR: 'Failed to create journal entry'
} as const

export const REGEX_PATTERNS = {
  WIKI_LINK: /\[\[(.*?)\]\]/g,
  SHORTCODE: /[\w>+*{}\[\]()]+$/,
  DATE_FILENAME: /\d{4}-\d{2}-\d{2}/,
  INVALID_FILENAME_CHARS: /[\\/:*?"<>|]/g
} as const
