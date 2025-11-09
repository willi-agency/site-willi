# Etapa 1: Build do Astro
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Etapa 2: Servir com nginx
FROM nginx:alpine

# Copiar o build para a pasta pública do nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Remover configuração padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Adicionar configuração personalizada
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
