import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-navigations/styles/material.css';
import '@syncfusion/ej2-react-calendars/styles/material.css';
import '@syncfusion/ej2-react-dropdowns/styles/material.css';
import '@syncfusion/ej2-react-inputs/styles/material.css';
import '@syncfusion/ej2-react-popups/styles/material.css';
import '@syncfusion/ej2-react-schedule/styles/material.css';
import '@syncfusion/ej2-react-buttons/styles/material.css';
import '@syncfusion/ej2-react-kanban/styles/material.css';
import './index.css'; 

registerLicense("Ngo9BigBOggjHTQxAR8/V1NNaF1cWWhOYVFpR2Nbek5xdV9GaFZVQmY/P1ZhSXxWdkNjW31dcHxRTmddVEx9XUs=")

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
