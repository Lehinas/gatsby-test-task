# Статический блог на Gatsby.js

Этот репозиторий содержит простой статический блог, построенный на Gatsby.js с использованием Markdown-файлов для хранения контента и CSS Modules для стилизации.

## 🚀 Структура проекта

```
my-blog/
├── src/
│   ├── content/
│   │   └── posts/        # Markdown-файлы с постами
│   │       ├── post1.md
│   │       ├── post2.md
│   │       └── post3.md
│   ├── pages/
│   │   ├── index.tsx    # Главная страница со списком постов
│   │   ├── index.module.css
│   │   └── 404.tsx       # Страница ошибки 404 (Стартер page)
│   ├── templates/
│   │   ├── Post.tsx      # Шаблон для отдельного поста
│   │   └── Post.module.css
│   └── global.css        # Глобальные стили (тёмная тема)
├── gatsby-config.js      # Конфигурация Gatsby
├── gatsby-node.js        # Генерация страниц из Markdown
├── tsconfig.json         # Настройки TypeScript
├── custom.d.ts           # Декларации модулей CSS
├── package.json
└── README.md             # Этот файл
```

## 🛠 Установка и запуск

Клонируйте репозиторий и введите:
   ```bash
   npm install
   npm run develop
   ```
