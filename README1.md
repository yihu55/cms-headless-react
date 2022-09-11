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


### implement jwt
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

### npx create-react-app
### cleanup  some files: App.test.js,index,css,logo.svg in src folder
### get rid of import './index.css' in index.js;
### get rid of import logo in App.js