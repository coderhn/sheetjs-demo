import React, { useRef } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
import './style.css'

// register Handsontable's modules
registerAllModules();

const hotData = [
  ["", "Tesla", "Volvo", "Toyota", "Honda"],
  ["2020", 10, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13]
];

const App = () => {
  const hotTableComponent = useRef(null);
  console.log('hotTableComponent', hotTableComponent.current)
  return (
    <div id="hot-app">
      <HotTable
        data={hotData}
        ref={hotTableComponent}
        colHeaders
        rowHeaders
        width="600"
        height="300"
        contextMenu
      />
    </div>
  );
}

export default App
