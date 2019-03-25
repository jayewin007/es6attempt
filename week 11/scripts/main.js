var url= 'https://fengshui-api.com/api/v1/findChineseSignOfYear?token=46hc9171hA1B8ZM02T5e7dE3BDEF6Db6efe682I0&year=1999&month=5&day=2&gender=0'

let params= "";

$("#searchBtn").click(()=>{
    paramsa = "";
    params=+ '&year=' + $('#year').val();
    params=+ '&month=' + $('#month').val();
    params=+ '&day=' + $('#day').val();
    params=+ '&gender=' + $('#gender').val();

    $.getJSON(url + params, function(data){
        $('#resultsArea').html('<h1>' + data.result + '</h1>')
    })
});
