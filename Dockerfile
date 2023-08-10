# Use a imagem base oficial do PHP
FROM php:7.4-apache

# Copie os arquivos do projeto para o diretório de trabalho do container
COPY . /var/www/html/
