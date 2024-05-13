# TinyMCE-5-accordion
## Документация к плагину "Accordion" для TinyMCE

### Описание

Плагин "Accordion" предоставляет возможность легко создавать и управлять аккордеонами (раскрывающиеся панели) в редакторе TinyMCE. Он позволяет пользователям добавлять, изменять, открывать/закрывать и удалять аккордеоны с помощью интуитивно понятного интерфейса.

### Установка

1. Скопируйте код плагина и вставьте его в свой проект.
2. Добавьте скопированный код в раздел инициализации TinyMCE.
3. Инициализируйте редактор TinyMCE с плагином "Accordion".

### Использование

1. Нажмите на кнопку "Accordion" на панели инструментов, чтобы добавить новый аккордеон.
2. После добавления аккордеона откройте его, чтобы увидеть поля для ввода заголовка и содержимого.
3. После ввода заголовка и содержимого нажмите кнопку "Insert" для добавления аккордеона в документ.
4. Для открытия/закрытия аккордеона кликните на его заголовок.
5. Для удаления аккордеона выберите его и нажмите кнопку "Remove Accordion" на панели инструментов.

### Команды

- **Accordion**: Добавляет новый аккордеон.
- **Toggle Accordion**: Открывает/закрывает выбранный аккордеон.
- **Remove Accordion**: Удаляет выбранный аккордеон.

### Дополнительные настройки

- **accordionTitle**: Заголовок аккордеона.
- **accordionContent**: Содержимое аккордеона.

### Пример инициализации TinyMCE с использованием плагина "Accordion"

```javascript
tinymce.init({
  selector: '#textarea',
  external_plugins: {
    accordion: '/accordion/plugin.min.js'
  },
  plugins: 'accordion',
  toolbar: 'accordion',
});
```


