FROM php:7.2-apache
RUN apt-get update && apt-get upgrade -y
RUN docker-php-ext-install mysqli
RUN docker-php-ext-install pdo pdo_mysql

COPY backend/src/index.php /var/www/html
# COPY backend/php.ini /usr/local/etc/php

EXPOSE 80

# start Apache2 on image start
# CMD ["/usr/sbin/apache2ctl","-DFOREGROUND"]