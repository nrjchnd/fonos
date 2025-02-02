# Running Project Fonos with Docker Composer

## Running Project Fonos

First, install multipass:

```
multipass launch --name fonos \
--disk 8G \
--cpus 2 \
--mem 4G

multipass shell fonos

sudo apt update
sudo apt install docker.io docker-compose
```

To run Project Fonos, use the following steps:

1. Create the external volumes

```
docker volume create --name=datasource
docker volume create --name=datasource_auth
docker volume create --name=data1-1
```

2. Copy `env_example` into `.env`

3. Run infrastructure with docker compose


```bash
git clone https://github.com/fonoster/fonos --depth=1
cd .compose
sudo docker-compose --env-file .env \
    -f 00_config.yml \
    -f 01_deps.yml \
    -f 02_api.yml \
    -f 03_sipnet.yml up -d
```

Once all the services all up an running initialize the system with:

```
docker-compose -f init.yml up
```

4. Launch additional services (Optional)

```bash
docker-compose --env-file .env -f extras.yml -up -d
```

> Append `dev.yml` if you want to open the ports on all the services (Only recommended for development)