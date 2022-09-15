# Wordpress Examination 
1. frontend React
2. backend wordpress 

## backend hosted on Pantheon.io [https://dev-yis-firsta-site.pantheonsite.io/](https://dev-yis-firsta-site.pantheonsite.io/)

1. create a account on  [https://pantheon.io](https://pantheon.io)
2. go to Pantheon dashbord, click Create New Site button
3. choose wordpress
4. fill up name of your Pantheon site, choose a Region for the Site, click Continue
5. go to your site, click button 'Visit Development Site' for navigating to wordpress 
6. choose Development Mode to git for working repo locally. For cloning repo you will need ssh key, for generate a ssh key, do as follwoing
   
        ## Generate  SSH key
        ### open your terminal and enter the following command to generate a key:
        ```
        $ssh-keygen
        ```

        ### for windows type:
        ```
        C:\Users\user> type .ssh\id_rsa.pub
        ```

        ## start the SSH agent in terminal
        ```
        start-ssh-agent
        ```
        # Add SSH key to pantheon

        1. Log in to your Pantheon site.

        2. Click your username in the top right, then select My Dashboard.

        3. Open the  Account tab in your User Dashboard.

        4. Click SSH Keys.

        5. Paste the copied public key into the Add Key box.

        6. Click the Add Key button.

        # Troubleshooting

        ### if you got this issue when git clone 

        ```
        Unable to negotiate with 203.0.113.123 port 2222: no matching host key type found. Their offer: ssh-rsa
        ```

        ### do as following
        1. create a config file in .ssh
        2. copy paste following
        ```
        Host *.drush.in
            # The settings on the next two lines are temporary until Pantheon updates the available key types.
            # If 'PubkeyAcceptedAlgorithms' causes an error, remove it.
            HostkeyAlgorithms +ssh-rsa
            PubkeyAcceptedAlgorithms +ssh-rsa
        ```

        ## Authenticity & Fingerprint Prompts
        ### Your first connection to any remote server over an SSH connection (like Git or SFTP) will prompt you to confirm the host identity:
        ### You can safely type yes and press enter to add the server's SSH key fingerprint to your computer's known_hosts file.

7. install plugin 'JWT-Authentication for WP-API', activate, then configurate the wp-config.php file
   ### define secret key in wp-config.php 

    ```
    define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
    ```

    ### enable CORs support edit wp-config.php
    ```
    define('JWT_AUTH_CORS_ENABLE', true);
    ```

    ### there two lines of config should be above for configuration working properly
    ```
    require_once ABSPATH . 'wp-settings.php';
    ```


## frontend using React.js, hosted on Vercel [https://cms-headless-react.vercel.app/](https://cms-headless-react.vercel.app/)

1. create a free account on [https://vercel.com](https://vercel.com) then log in
2. Import a Third-Party Git Repository, like github, gitlab
3. go back to vercel dashbord, add new project
4. import Git Repository, choose a repository to import for deploy
5. for enviroment variables, click settings->Enviroment Variables->Add New
6. live site is up and running. 
7. once github repository get uppdated, it will build and deploy by Vercel automaticlly.