install: # установка зависимостей
	npm ci

publish: # публикация пакета
	npm publish --dry-run

lint: # проверка кода
	npx eslint .

brain-games: # старт игры
	node bin/brain-games.js

brain-even: # старт игры
	node bin/brain-even.js

brain-calc: # старт игры
	node bin/brain-calc.js

brain-gcd: # старт игры
	node bin/brain-gcd.js

brain-progression: # старт игры
	node bin/brain-progression.js

brain-prime: # старт игры
	node bin/brain-prime.js
