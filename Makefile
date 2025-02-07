install: # установка зависимостей
	npm ci

publish: # публикация пакета
	npm publish --dry-run

lint: # проверка кода
	npx eslint .

brain-games: # старт игры
	node bin/brain-games.js
