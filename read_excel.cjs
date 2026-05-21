const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, 'Atividade 23-04-26 Frequência ideia de gráfico.xlsx');
const workbook = XLSX.readFile(filePath);

workbook.SheetNames.forEach(sheetName => {
    console.log(`\n===== SHEET: ${sheetName} =====\n`);
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
    // Only print non-empty rows
    data.forEach((row, i) => {
        const hasData = row.some(cell => cell !== '' && cell !== null && cell !== undefined);
        if (hasData) {
            console.log(`Row ${i}: ${JSON.stringify(row)}`);
        }
    });
});
