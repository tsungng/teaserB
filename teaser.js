//Declaration of variables
var array =['red', 'orange', 'yellow' , 'green', 'blue', 'purple'];
var iconArr = ['arrow-right', 'arrow-down' , 'arrow-left' , 'arrow-up'];

function getNums(){
    var regex = /^[2-8]$/;
    var numRows = document.getElementById('rows').value;
    var numCols = document.getElementById('columns').value;
    
    if (!regex.test(numRows)){
        alert('Your rows must be between 2 and 8.');
        return false;
    }
    else if(!regex.test(numCols)){
        alert('Your columns must be between 2 and 8.');
        return false;
    }
    else{               
        cookievalue1= numRows + ';';        
        cookievalue2 = numCols + ';';
        document.cookie = 'Rows = '+ cookievalue1;
        document.cookie = 'Columns = '+cookievalue2;
        window.location.href = "test.html";
       // return false;        
    }
    
}

function getCookie( check_name ) {
    //split this cookie up into name/value pairs
    var a_all_cookies = document.cookie.split( ';' );
    var a_temp_cookie = '';
    var cookie_name = '';
    var cookie_value = '';
    var b_cookie_found = false; // set boolean t/f default f
    
    for ( i = 0; i < a_all_cookies.length; i++ )
    {
        // now we'll split apart each name=value pair
        a_temp_cookie = a_all_cookies[i].split( '=' );
        // and trim left/right whitespace while we're at it
        cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, ''); 
        // if the extracted name matches passed check_name
        if ( cookie_name == check_name )
        {
            b_cookie_found = true;
            // we need to handle case where cookie has no value but exists (no = sign, that is):
            if ( a_temp_cookie.length > 1 )
            {
                cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
            }
            // note that in cases where cookie is initialized but no value, null is returned
            return cookie_value;
            break;
        }
        a_temp_cookie = null;
        cookie_name = '';
    }
    if ( !b_cookie_found )
    {
        return null;
    }
}

function getRandom(){
    var cookieRow = getCookie('Rows');
    var cookieCol = getCookie('Columns');
    document.write('<table>');
    for (var i = 0; i <cookieRow; i++){
        document.write('<tr>');
        for (var j = 0; j <cookieCol; j++){
            var rng = Math.floor((Math.random()*6));
            var rngR = [(Math.random()*4) | 0];
            document.write('<td><i class ="fa fa-'+ iconArr[rngR] +' '+ array[rng]+'"></i></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}
