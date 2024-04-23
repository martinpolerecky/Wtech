# Steam z Lidlu

Vanilla HTML/CSS/JS website project for the 'Web technologies' course.

**Contributors**:

**Adrián Ivančík** ([Csirifisz](https://github.com/Csirifisz))
- HTML: homepage, store, wishlist, Enshrouded, Risk of Rain 2, Baldur's Gate 3
- CSS:  css_a
- JS:   game_rating, games.json, store

**Daniel Macejko** ([maci84581](https://github.com/maci84581))
- HTML: homepage, profile, GTA VI (pay1), CS:2 (pay2), Assassin's Creed (pay3), thanks, thanks2
- CSS:  nav

**Martin Polerecký** ([martinpolerecky](https://github.com/martinpolerecky))
- HTML: homepage, support, about, pay, system requirements, Need For Speed, Amogus, Pokemon
- CSS:  games_m, about
- JS:   support, payment

**Downloading the project:**

```bash
git clone https://github.com/martinpolerecky/Wtech.git

cd Wtech
```

To display the web pages, simply open __[homepage.html]__(homepage.html) with your browser of choice by right-clicking on the file and selecting 'open with'

Alternatively, you can open homepage.html from the command line as follows:

Windows/macOS/Linux
```bash
open homepage.html
```

To ensure every functionality is working properly, you'll have to start a local development http server. This is needed because the JS code uses the fetch API. 

Luckily the IDE __[Webstorm]__(https://www.jetbrains.com/webstorm/) from JetBrains takes care of this and when a .html file is launched from the IDE it automatically launches a dev server.
If the IDE is not available to you, one can simply start a local dev server, for example with python:

On **Windows**, navigate to the directory where the files are stored e.g.: C:\Path\Wtech
Open __CMD__ or __PowerShell__ and type:
```bash
py -m http.server
```
Open a browser of your choice and go to the URL: **localhost:8000**
This way all the files are served from the local dev server
To shut it down just press **Ctrl + C**


On **Linux** devices, this can be achieved using the __Apache__ HTTP server.
For Debian based distributions:
```bash
sudo apt update

sudo apt install apache2

cd /etc/apache2
```
Using a text editor, modify  **ports.conf** to include the following line:
```bash
Listen 63342
```

Additionaly, you need to set up a virtual host by either creating a separate .conf file or modifying the **000-default.conf** file in __/etc/apache2/sites-available__
to include the following lines:
```bash
DocumentRoot /path/to/dir/Wtech

<Directory /path/to/dir/Wtech>
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
</Directory>
```

The web server should now work. To verify, open your browser and type **localhost/homepage.html**