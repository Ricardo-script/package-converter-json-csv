const downloadCSVFromJson = (filename, arrayOfJson) => {

    const replacer = (key, value) => value === null ? '' : value
    const header = Object.keys(arrayOfJson[0])
    let csv = arrayOfJson.map(row => header.map(fieldName => 
    JSON.stringify(row[fieldName], replacer)).join(';'))
    csv.unshift(header.join(';'))
    csv = csv.join('\r\n')
  

    var link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default downloadCSVFromJson;