# Force Cookies

Clone Wars–era wisdom, on demand.

Force Cookies is a lightweight VS Code extension that fetches a random quote (“wisdom”) and puts it where you need it: on screen and on your clipboard.

## Features

- **Get Wisdom**: Fetches a random quote, shows it in a toast, and **automatically copies it to your clipboard** so you can paste it anywhere.
- **Show Wisdom**: Opens the Force Cookies site inside VS Code.

## Commands

Open the Command Palette and run:

- **Force Cookies: Get Wisdom**
    - Displays the quote
    - Copies the quote to your clipboard (toast confirms it was copied)
- **Force Cookies: Show Wisdom**
    - Opens the Force Cookies website in VS Code’s built-in browser

## Requirements

- VS Code 1.105.0+

## Install

### Option A: Install the VSIX

1. Download/build the `.vsix` file.
2. In VS Code: Extensions view → `...` → **Install from VSIX…**

Or from the command line:

```bash
code --install-extension force-cookies-0.0.2.vsix
```

### Option B: Install from the Marketplace

## License

MIT — see [LICENSE](LICENSE).

## Attribution & Disclaimer

This extension is an unofficial, fan-made project inspired by *Star Wars: The Clone Wars* and the work of Dave Filoni.

Star Wars and related marks are trademarks of Lucasfilm Ltd. and/or its affiliates. This project is not affiliated with, endorsed by, or sponsored by Lucasfilm, Disney, Dave Filoni, or any related parties.

Quotes/wisdom content is fetched at runtime from the Force Cookies API: https://force-cookiesv2.vercel.app/
