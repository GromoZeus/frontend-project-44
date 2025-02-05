install: # установка зависимостей
	npm ci

publish: # публикация пакета
	npm publish --dry-run

brain-games: # старт игры
	node bin/brain-games.js
