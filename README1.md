### download wordpress.org
### extract wordpress zip to xampp->htdocs to make a wordpress instance
### for installation phpdotenv via composer https://github.com/vlucas/phpdotenv

### add following code to wp-config.php
```
require_once dirname(__FILE__) . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
```

### create a .env.sample and .env in root
### .env.sample for letting people know what variables are required
### store env variables in .env, don't forget add .env in .gitignore




### npx create-react-app
### cleanup  some files: App.test.js,index,css,logo.svg in src folder
### get rid of import './index.css' in index.js;
### get rid of import logo in App.js




# Generate  SSH key
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



# implement jwt
### install jwt plugin in wordpress
### adding in .htaccess folllowing
```
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

### define secret key in wp-config.php
```
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
```

### enable CORs support edit wp-config.php
```
define('JWT_AUTH_CORS_ENABLE', true);
```