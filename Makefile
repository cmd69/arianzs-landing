.DEFAULT_GOAL := help
COMPOSE_DEV  := docker compose -f docker-compose.yml
COMPOSE_PROD := docker compose -f docker-compose.prod.yml

.PHONY: help setup up down logs shell build up-prod down-prod logs-prod

help:
	@echo "arianzs-landing"
	@echo ""
	@echo "  make setup      Copia .env.example → .env"
	@echo "  make up         Levanta en modo dev (Vite hot-reload)"
	@echo "  make down       Para dev"
	@echo "  make logs       Logs dev"
	@echo "  make shell      Shell en el contenedor dev"
	@echo "  make build      Construye imagen de producción"
	@echo "  make up-prod    Levanta en modo prod (nginx)"
	@echo "  make down-prod  Para prod"
	@echo "  make logs-prod  Logs prod"

setup:
	@test -f .env || cp .env.example .env && echo ".env creado"

up:
	$(COMPOSE_DEV) up

down:
	$(COMPOSE_DEV) down

logs:
	$(COMPOSE_DEV) logs -f

shell:
	$(COMPOSE_DEV) exec app sh

build:
	$(COMPOSE_PROD) build

up-prod:
	$(COMPOSE_PROD) up -d

down-prod:
	$(COMPOSE_PROD) down

logs-prod:
	$(COMPOSE_PROD) logs -f
