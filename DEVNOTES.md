# MineWiser express server:

Login to Digital Ocean
$ ssh zach@138.197.207.216

The app runs under a low permission user – chartapp
$ cd /var/appdata/chartapp

Start, Stop and restart chartapp.service
sudo systemctl daemon-reload 
sudo systemctl start chartapp.service

nginx
config: $ cd /etc/nginx/cong.d
sudo /etc/init.d/nginx restart