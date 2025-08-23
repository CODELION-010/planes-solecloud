# Dockerfile para proyecto estático
FROM nginx:alpine

# Copia el contenido del proyecto al directorio de Nginx
COPY . /usr/share/nginx/html

# El contenedor expone el puerto 80 (Nginx)
EXPOSE 80
