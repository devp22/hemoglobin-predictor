FROM nginx:alpine AS production-stage

COPY --from=frontend-builder /app/build /usr/share/nginx/html

COPY --from=backend-builder /app /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 5000

CMD ["sh", "-c", "nginx -g 'daemon off;' & python /app/app.py"]
