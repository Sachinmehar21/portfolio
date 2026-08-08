# Awesome Serif font files go here

The design's headings use **Awesome Serif** (a commercial font — get the files
from Sanskrati, she has the license she uses in Figma). Body text is Darker
Grotesque, which is already loaded from Google Fonts.

Drop the files into this folder with exactly these names:

- `AwesomeSerif-Regular.woff2` (or `AwesomeSerif-Regular.otf`)
- `AwesomeSerif-Italic.woff2` (or `AwesomeSerif-Italic.otf`)

Nothing else to do — `app/globals.css` already has the `@font-face` rules.
Until the files exist, headings fall back to Instrument Serif automatically.
