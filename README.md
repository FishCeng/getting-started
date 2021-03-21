# Docker Getting Started Tutorial



This tutorial has been written with the intent of helping folks get up and running
with containers and is designed to work with Docker Desktop. While not going too much 
into depth, it covers the following topics:

- Running your first container
- Building containers
- Learning what containers are running and removing them
- Using volumes to persist data
- Using bind mounts to support development
- Using container networking to support multi-container applications
- Using Docker Compose to simplify the definition and sharing of applications
- Using image layer caching to speed up builds and reduce push/pull size
- Using multi-stage builds to separate build-time and runtime dependencies

## Getting Started

If you wish to run the tutorial, you can use the following command after installing Docker Desktop:

```bash
docker run -d -p 80:80 docker/getting-started
```

Once it has started, you can open your browser to [http://localhost](http://localhost).

## Development

This project has a `docker-compose.yml` file, which will start the mkdocs application on your
local machine and help you see changes instantly.

```bash
docker-compose up
```

## Contributing

If you find typos or other issues with the tutorial, feel free to create a PR and suggest fixes!

If you have ideas on how to make the tutorial better or new content, please open an issue first before working on your idea. While we love input, we want to keep the tutorial  scoped to newcomers.
As such, we may reject ideas for more advanced requests and don't want you to lose any work you might
have done. So, ask first and we'll gladly hear your thoughts!


## Run on Raspberry 4B
- Repace MySQL with PostgreSQL

Environment Variables :  
- PG\_HOST
- PG\_HOST\_FILE
- PG\_USER
- PG\_USER\_FILE
- PG\_PASSWORD
- PG\_PASSWORD\_FILE



Assuming you've created a network named todo-app, then :

```bash
docker run --network todo-app \
   --network-alias pghost \
   -v todo-pgsql-data:/var/lib/postgresql/data \
   -e POSTGRES_DB=todos \
   -e POSTGRES_USER=user1 \
   -e POSTGRES_PASSWORD=secret \
   -d postgres

```

go to the getting-stared/app folder, then :  

```bash
docker run -dp 3000:3000 \
   -w /app -v "$(pwd):/app" \
   --network todo-app \
   -e PG_HOST=pghost\
   -e PG_USER=user1 \
   -e PG_PASSWORD=secret \
   -e PG_DB=todos \
   getting-started \
   sh -c "yarn add pg && yarn install && yarn run dev"
```
