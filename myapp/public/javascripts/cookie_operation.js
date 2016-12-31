
        /** 操作 cookie
         * 浏览器中操作 cookie 的核心接口就是 document.cookie
         * 设置cookie就是 document.cookie = string;
         * 获得cookie就是 var str = document.cookie;
         *
         * cookie 操作就是：增删该查
         */

        //查
        function getCookieByName(name){
            var nameValueArray = document.cookie.split(';');

            for(var i = 0; i< nameValueArray.length; i++){
                var temp = nameValueArray[i];

                var nameTemp = temp.split('=')[0].trim();   //trim 去掉字符串前后多余的空格  // \t \r \n
                var valueTemp = temp.split('=')[1].trim();
                if(nameTemp === name ){
                    return valueTemp;
                }
            }
            return '';
        }
        function getAllCookie() {
            var cookieStr = document.cookie;
            return cookieStr;
        }

        //增加 cookie      
        //修改 cookie
        function setCookie(name, value, expiresSeconds){
            //拼接 名值对儿 字符串
            var nameAndValue = name + '=' + value;
            //拼接 过期时间字符串
            var date = new Date();
            date.setSeconds( date.getSeconds() + expiresSeconds); //返回值 是数字
            var dateStr = date.toGMTString();   //操作这个对象
            var expires = ';expires=' + dateStr;

            document.cookie = nameAndValue + expires;
        }

        //删除 cookie
        function deleteCookieByName(name) {
            //将时间设置为 负值
            setCookie(name, 'value', -10);
        }


        //document.cookie = 'name=value;max-Age=1000*10';
//        setCookie('userName1', 'A', 10 * 60 * 60 );
//        setCookie('userName2', 'B', 10 * 60 * 60 );
//        setCookie('userName3', 'C', 10 * 60 * 60 );
//        var str = document.cookie;
//        console.log(str);
//        var value = getCookieByName('userName2');
//        console.log(value);





