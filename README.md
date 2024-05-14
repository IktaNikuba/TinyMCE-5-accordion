# TinyMCE-5-accordion
## Documentation for the "Accordion" plugin for TinyMCE version 5

### Description

The "Accordion" plugin provides an easy way to create and manage accordions (collapsible panels) in the TinyMCE editor. It allows users to add, edit, open/close, and delete accordions using an intuitive interface.

### Installation

1. Copy the plugin code and paste it into your project.
2. Add the copied code to the TinyMCE initialization section.
3. Initialize the TinyMCE editor with the "Accordion" plugin.

### Usage

1. Click the "Accordion" button on the toolbar to add a new accordion.
2. After adding the accordion, a field for entering the title and content will appear.
3. After entering the title and content, click the "Insert" button to add the accordion to the document.
4. To open/close the accordion, click on the toggle icon in the context toolbar.
5. To delete the accordion, select it and click the "Remove Accordion" button in the context toolbar.

### Commands

- **Accordion**: Adds a new accordion.
- **Toggle Accordion**: Opens/closes the selected accordion.
- **Remove Accordion**: Deletes the selected accordion.

### Additional Settings

- **accordionTitle**: Title of the accordion.
- **accordionContent**: Content of the accordion.

### Example initialization of TinyMCE using the "Accordion" plugin

```javascript
tinymce.init({
  selector: '#textarea',
  external_plugins: {
    accordion: '/tinymce/plugins/accordion'
  },
  plugins: 'accordion',
  toolbar: 'accordion',
});
```

______________________________________________________________

# TinyMCE-5-accordion
## Документация к плагину "Accordion" для TinyMCE версии 5

### Описание

Плагин "Accordion" предоставляет возможность легко создавать и управлять аккордеонами (раскрывающиеся панели) в редакторе TinyMCE. Он позволяет пользователям добавлять, изменять, открывать/закрывать и удалять аккордеоны с помощью интуитивно понятного интерфейса.

### Установка

1. Скопируйте код плагина и вставьте его в свой проект.
2. Добавьте скопированный код в раздел инициализации TinyMCE.
3. Инициализируйте редактор TinyMCE с плагином "Accordion".

### Использование

1. Нажмите на кнопку "Accordion" на панели инструментов, чтобы добавить новый аккордеон.
2. После добавления аккордеона откроется поле для ввода заголовка и содержимого.
3. После ввода заголовка и содержимого нажмите кнопку "Insert" для добавления аккордеона в документ.
4. Для открытия/закрытия аккордеона кликните на иконку переключателя в всплывающем туулбаре.
5. Для удаления аккордеона выберите его и нажмите кнопку "Remove Accordion" в всплывающем туулбаре.

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
    accordion: '/tinymce/plugins/accordion'
  },
  plugins: 'accordion',
  toolbar: 'accordion',
});
```


