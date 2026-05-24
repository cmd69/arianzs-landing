.DEFAULT_GOAL := help
COMPOSE_DEV := docker compose -f docker-compose.dev.yml

.PHONY: help setup up down logs up-dev down-dev logs-dev shell build

help:
	@echo "arianzs-landing"
	@echo ""
	@echo "  make setup      Copia .env.example -> .env"
	@echo "  make up         Levanta en modo prod (nginx)"
	@echo "  make down       Para prod"
	@echo "  make logs       Logs prod"
	@echo "  make build      Construye imagen de producción"
	@echo "  make up-dev     Levanta en modo dev (Vite hot-reload)"
	@echo "  make down-dev   Para dev"
	@echo "  make logs-dev   Logs dev"
	@echo "  make shell      Shell en el contenedor dev"

setup:
	@test -f .env || cp .env.example .env && echo ".env creado"

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

build:
	docker compose build

up-dev:
	$(COMPOSE_DEV) up

down-dev:
	$(COMPOSE_DEV) down

logs-dev:
	$(COMPOSE_DEV) logs -f

shell:
	$(COMPOSE_DEV) exec app sh
