# Phoogle by Phobia
A console based NodeJS web crawler to make searching the web a tad less stressful by automating part of the process, and searching the internet for you.

Installation, and use steps:

1: Clone the repo

    git clone https://github.com/PhobiaGH/Phoogle

2: Install nvm (Alterantively you can just install node directly from your distros repo if you don't care about being able to manage multiple node installs. This program uses node 19.9.0. If you skip installing nvm you may go right to step 7.)

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash

3: In your terminal type,

    nvm -v

4: If you get "command nvm not found" type the following codes into your terminal, otherwise skip to step 5

    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    
    touch ~/.bash_profile
    
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
    
    . ~/.bash_profile

    nvm -v

5: Install Node Version Manager
    
    nvm install

6: Use installed node version
    
    nvm use

7: cd into Phoogle dir

    cd /path/to/dir

8: Install node dependencies
    
    npm install

9: Start the program
    
    npm start https://www.url-you-wish-to-use.com/

That's it! All links from crawled page are saved in /Phoogle/yoursystemscurrenttimeanddate/links.txt enjoy!