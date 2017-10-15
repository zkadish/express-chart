# MineWiser express server:

### Login to Digital Ocean
- $ ssh zach@138.197.207.216

### The app runs under a low permission user – chartapp
- $ cd /var/appdata/chartapp

### The droplet's root user has been disabled and replaced
- user: "zach" has root prilages
- password: "zach" 

### TODO: change username and password to something no one can guess but is easy to remember.

### Start, Stop and restart chartapp.service
- $ sudo systemctl daemon-reload 
- $ sudo systemctl start chartapp.service

### nginx
- $ config: $ cd /etc/nginx/cong.d
- $ sudo /etc/init.d/nginx [restart, start, stop]

### lets encrypt certbot: https://certbot.eff.org/#debianjessie-nginx
1. stop nginx
2. $ sudo certbot renew --dry-run
3. $ certbot renew
4. start nginx

### TODO: change the port nginx is listening on so lets encrypt certbot can use it to renew its self via a cron job.

### deployment
1. Change folder permissions to zach user from chartapp user
2. $ scp source/files/* zach@138.197.207.216:/var/appdata/chartapp/*

### TODO: Set up a deployment system using Code Fresh...

### Bibliography
- Used the following tutorial with some alterations to SSl steps to set up the node server
https://blog.nodeswat.com/set-up-a-secure-node-js-web-application-9256b8790f11


