import React, { useRef } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, zhCN } from 'handsontable/i18n';
import 'handsontable/dist/handsontable.full.css';
import './style.css'

// register Handsontable's modules
registerAllModules();
registerLanguageDictionary(zhCN);



const hotData = [
  ["", "Tesla", "Volvo", "Toyota", "Honda","", "Tesla", "Volvo", "Toyota", "Honda"],
  ["2020", 10,"2020", 10, 11, 12, 13, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13]
];

const App = () => {
  const hotTableComponent = useRef(null);
 
  return (
      <HotTable
        // data={[1,2,3,4,5,6].map((d)=>(new Array(10)).map((d,i)=>i))}
        data={hotData}
        ref={hotTableComponent}
        colHeaders
        rowHeaders
        width="1000"
        height="500"
        contextMenu={['copy','cut','row_above', 'row_below', 'col_left','col_right','clear_column','remove_row','hidden_columns_hide']}
        language='zh-CN'
        hiddenColumns
        settings={{ licenseKey: 'non-commercial-and-evaluation',}}
      />
  );
}

export default App
