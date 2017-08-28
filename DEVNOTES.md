## MineWiser express server:

# Login to Digital Ocean
- $ ssh zach@138.197.207.216

# The app runs under a low permission user – chartapp
- $ cd /var/appdata/chartapp

# Start, Stop and restart chartapp.service
- $ sudo systemctl daemon-reload 
- $ sudo systemctl start chartapp.service

# nginx
- $ config: $ cd /etc/nginx/cong.d
- $ sudo /etc/init.d/nginx [restart, start, stop]

# lets encrypt certbot: https://certbot.eff.org/#debianjessie-nginx
1. stop nginx
2. $ sudo certbot renew --dry-run
3. $ certbot renew
4. start nginx

# TODO: change the port nginx is listening on so lets
# encrypt certbot can use it to renew its via a cron job.