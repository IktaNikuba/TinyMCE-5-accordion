tinymce.PluginManager.add('accordion', function(editor, url) {
  const openDialog = () => {
    return editor.windowManager.open({
      title: 'Accordion Settings',
      body: {
        type: 'panel',
        items: [
          {
            type: 'input',
            name: 'accordionTitle',
            label: 'Accordion Title'
          },
          {
            type: 'input',
            name: 'accordionContent',
            label: 'Accordion Content'
          }
        ]
      },
      buttons: [
        {
          type: 'cancel',
          text: 'Close'
        },
        {
          type: 'submit',
          text: 'Insert',
          primary: true
        }
      ],
      onSubmit: (api) => {
        const data = api.getData();
        editor.insertContent('<details class="mce-accordion"><summary>' + data.accordionTitle + '</summary><div>' + data.accordionContent + '</div></details>');
        api.close();
      }
    });
  };

  const toggleAccordion = (accordion) => {
    console.log("TOGGLE")
    accordion.open = !accordion.open;
  };

  const removeAccordion = () => {
    const accordion = editor.selection.getNode().closest("details");
    if (accordion) {
      accordion.remove();
    }
  };

  editor.ui.registry.addContextToolbar('accordion-toolbar', {
    predicate: (node) => node.tagName === 'DETAILS',
    items: 'toggleAccordion removeAccordion',
    position: 'node',
    scope: 'node'
  });

  editor.ui.registry.addButton('accordion', {
    text: 'Accordion',
    onAction: () => {
      if (editor.selection.getNode().tagName !== "SUMMARY") {
        openDialog();
      }
    }
  });

  editor.ui.registry.addButton('toggleAccordion', {
    icon: 'unfold-more',
    tooltip: 'Toggle Accordion',
    onAction: () => {
      const accordion = editor.selection.getNode().closest("details");
      if (accordion) {
        toggleAccordion(accordion);
      }
    }
  });

  editor.ui.registry.addButton('removeAccordion', {
    icon: 'remove',
    tooltip: 'Remove Accordion',
    onAction: () => {
      removeAccordion();
    }
  });

  return {
    getMetadata: () => {
      return  {
        name: 'Accordion plugin',
      };
    }
  };
});