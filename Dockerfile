# Sử dụng base image có sẵn của Node.js
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN yarn install

# Sao chép toàn bộ mã nguồn dự án vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng NestJS
RUN yarn run build

# Mở cổng mà ứng dụng NestJS sẽ lắng nghe
EXPOSE 3000
# Thêm biến môi trường
ENV NODE_ENV=production
ENV NODE_ENV development
ENV PORT 3333
ENV API_PREFIX_PATH /hachee/api

# DATABASE
ENV DB_NAME hachee_upload_file
ENV DB_HOST 103.214.11.225
ENV DB_PORT 3006
ENV DB_USER root
ENV DB_PASSWORD 300420
ENV DB_LOGGING true

# CRYPTO
ENV CIPHER_MODE aes-256-cbc
ENV CIPHER_KEY J9hJncoAQYmFMZtZciB4IETl0aSLMTk3
ENV CIPHER_IV Xck7Htiav6uHTlck

# AUTH
ENV JWT_SECRET_KEY 1RaAnHSZ2cepYwDwiqawPu47JHkHymKB
ENV JWT_EXPIRED_TIME_TOKEN 1d

# CORS
ENV CORS_ORIGIN "*,http://localhost:3000"

ENV URL_FILE "/app/hachee-upload-file/upload"
# Khởi chạy ứng dụng khi container được chạy
CMD ["node", "dist/main"]