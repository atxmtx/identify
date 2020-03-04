'use strict';

const meta = '@atxmtx/identify';
import { log } from '@atxmtx/developer-console';

function initIDs(): void {
  const editors = atom.workspace.getTextEditors();
  editors.map(editor => addEditorID(editor));

  const panes = atom.workspace.getPanes();
  panes.map(pane => addPaneID(pane));

  atom.workspace.observeTextEditors(editor => addEditorID(editor));
  atom.workspace.observePanes(pane => addPaneID(pane));
}

function addEditorID(editor): void {
  if (editor?.id) {
    const view: HTMLElement = atom.views.getView(editor);
    const buffer = editor.buffer;

    if (editor?.id && !view.getAttribute('data-editor-id')) {
      log(`${meta}: Add data-attribute for editor #${editor.id}`);
      view.setAttribute('data-editor-id', editor.id);
    }

    if (buffer.id && !view.getAttribute('data-buffer-id')) {
      log(`${meta}: Add data-attribute for buffer #${buffer.id}`);
      view.setAttribute('data-buffer-id', buffer.id);
    }
  }
}

function addPaneID(pane): void {
  if (pane?.id) {
    const view: HTMLElement = atom.views.getView(pane);

    if (!view.getAttribute('data-pane-id')) {
      log(`${meta}: Add data-attribute for pane #${pane.id}`);
      view.setAttribute('data-pane-id', pane.id);
    }
  }
}

export default initIDs;
