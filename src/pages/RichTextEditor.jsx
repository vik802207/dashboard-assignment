import React, { useEffect, useRef } from 'react';
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  HtmlEditor,
  QuickToolbar,
  Image,
  Inject
} from '@syncfusion/ej2-react-richtexteditor';

import './RichTextEditor.css';

const LOCAL_KEY = 'wysiwyg-content';

const RichTextEditor = () => {
  const rteRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved && rteRef.current) {
      rteRef.current.contentModule.getEditPanel().innerHTML = saved;
    }
  }, []);

  const handleSave = () => {
    const content = rteRef.current.contentModule.getEditPanel().innerHTML;
    localStorage.setItem(LOCAL_KEY, content);
    alert('✅ Content saved to local storage!');
  };

  return (
    <div className="rte-wrapper">
      <h2>📝 Rich Text Editor</h2>

      <RichTextEditorComponent
        ref={rteRef}
        height="420px"
        placeholder="Start writing here..."
        toolbarSettings={{
  items: [
    'Formats', 'Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'OrderedList', 'UnorderedList', '|',
    'CreateLink', 'Image', '|',
    'Undo', 'Redo', '|',
    'SourceCode', 'FullScreen'
  ]
}}

      >
        <Inject services={[Toolbar, Link, HtmlEditor, QuickToolbar, Image]} />
      </RichTextEditorComponent>

      <button className="save-btn" onClick={handleSave}>💾 Save</button>
    </div>
  );
};

export default RichTextEditor;
