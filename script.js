function reformat(){
    let str=document.getElementById('textarea-input').value;
    let strArray=str.trim().split(/\s+/);
    let result = [];
    for(let i=0; i<strArray.length; i++){
        let search = strArray[i].indexOf('m/search');
        let multiSearch = strArray[i].indexOf('multi_search');
        let status = strArray[i].indexOf('status=1');
        let section = strArray[i].slice(multiSearch,status+8);
        let reformatted = "/search?" + section + strArray[i].slice(search+8);
        let multicat = strArray[i].indexOf('&multi_cat');
        let city = strArray[i].substring(multiSearch+13, multicat);
        let cityName = city.replace(/%20/g, ' ').toUpperCase();
        //console.log(`${cityName} ${reformatted}`);
        result.push(`${cityName} 
        ${reformatted}
        `);
        document.getElementById('textarea-input').classList.add('change-text');
        document.getElementById('textarea-input').value = `${result.join('\n')}`;
    } 
}