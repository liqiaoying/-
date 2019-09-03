export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

// 二级彩种管理1-200整数排序
export function valida0to100Num(str) {
    const reg = /^([1-9]\d{0,3}|200)$/;
    return reg.test(str)
}

// 权限管理1-10000的整数排序

export function validSort2(str) {
    const reg = /^([1-9]\d|[1-9]\d{0,3}|99999)$/;
    return reg.test(str);
}
// 验证代理商老板、员工、运营、超管用户名
export function validateUserName(str) { // 首位字母 数字和字母 4-8位
    const reg = /^[a-z][a-z|\d]{3,7}$/;
    return reg.test(str);
}

// 验证一般用户名
export function validateCommonUserName(str) { // 中英文、数字、字母 2-20位
    const reg = /^[\u4E00-\u9FA5_A-Za-z0-9]{2,20}$/;
    return reg.test(str);
}

// 验证2-15位字符
export function validOneToFiveth(str) {
    const reg = /[\u4E00-\u9FA5_A-Za-z0-9]{2,15}$/;
    return reg.test(str);
}
// 验证2-15位数字
export function validFigure(str) {
    const reg = /^\d{2,15}$/;
    return reg.test(str);
}

// 验证1-30位字符 （字母、数字、汉字）
export function validOneToThirty(str) {
    const reg = /[\u4E00-\u9FA5_A-Za-z0-9]{1,30}$/;
    return reg.test(str);
}

// 验证1-50位字符 （字母、英文冒号）
export function validLetterColon(str) {
    const reg = /[A-Za-z:]{1,50}$/;
    return reg.test(str);
}

/* 数据供应商名称验证*/
export function dataProviderValidatName(str) { // 中文英文，数字，15个字符
    const reg = /^[\u4E00-\u9FA5_A-Za-z0-9]{2,20}$/;
    return reg.test(str);
}
/* 页面地址验证*/
export function pageUrl(str) {
    const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;;
    return reg.test(str);
}

// 验证数IP地址
export function validIpNumber(str) {
    const reg = /[\d|.]{1,15}/;
    return reg.test(str)
}

// 验证权限名称
export function permissionName(str) {
    const reg = /^[\u4E00-\u9FA5_A-Za-z0-9]{2,25}$/;
    return reg.test(str);
}

// 验证期号
export function validOpenDate(str) {
    const reg = /^[0-9]{2,15}$/;
    return reg.test(str);
}

// 验证排序
export function validSort(str) {
    const reg = /^[0-9]{1,7}$/;
    return reg.test(str);
}

// 修改用户密码验证
export function validatePwd(str) {
    const reg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{4,15}$/;
    return reg.test(str);
}

// IP地址验证
export function ipArea(newPwd) {
    const re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return re.test(newPwd);
}

// 合法uri
export function validURL(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
}

// 验证邮箱
export function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

// 七位字符、保留两位小数、只支持数字
export function validsevendata(str) {
    //  const reg = /^[1-9]$/
    const reg = /(^\d{1,4}([\.]{1}\d{1,2})?$)|(^\d{1,7}$)/
    return reg.test(str)
}

// 九位字符、保留三位小数、只支持数字 
export function validNinedata(str) {
    const reg = /(^\d{1,5}([\.]{1}\d{1,2})?$)|(^\d{1,8}$)/
    return reg.test(str)
}

// 范围在大于或等于0小于1亿的正整数
export function validNinedatayi(str) {
    const reg = /^[0-9]{0,8}$/
    return reg.test(str)
}

// 九位字符、只支持数字
export function validNinedata_nine(str) {
    const reg = /^[0-9]{0,9}$/
    return reg.test(str)
}
// 十位字符、只支持数字 （有小数点）
export function validNinedata_wholeTen(str) {
    const reg = /\d{0,10}$/
    return reg.test(str)
}
// 十三位字符、只支持数字 （有小数点）
export function validNinedata_wholeThirteen(str) {
    const reg = /\d{0,13}$/
    return reg.test(str)
}

// 十位字符、保留二位小数、只支持数字 
export function validNinedata_ten(str) {
    const reg = /(^\d{0,10}([\.]{1}\d{1,2})?$)|(^\d{0,10}$)/
    return reg.test(str)
}

// 十三位字符、保留二位小数、只支持数字
export function validNinedata_thirteen(str) {
    const reg = /(^\d{0,10}([\.]{1}\d{1,2})?$)|(^\d{0,13}$)/
    return reg.test(str)
}

// 十二位字符、保留二位小数、只支持数字
export function validNinedata_twelve(str) {
    const reg = /(^\d{0,9}([\.]{1}\d{1,2})?$)|(^\d{0,12}$)/
    return reg.test(str)
        // if(str !=""){
        //     return reg.test(str)
        // }else{
        //   return true
        // }

}

// 验证注单号码长度 ---仅支持输入数字、字母（大小写)
export function validUserNameLen_zhudan_Number(str) {
    const reg = /^[0-9a-zA-Z]{0,30}$/;
    return reg.test(str);
}
// 九位字符、保留三位小数、只支持数字 -- 赔率可以为空
export function validNinedata_odds(str) {
    const reg = /(^\d{0,6}([\.]{1}\d{1,2})?$)|(^\d{0,9}$)/
    return reg.test(str)
}
// 十九位字符、只支持数字
export function validNinedata_wholenineteen(str) {
    const reg = /^[0-9]{0,19}$/
    return reg.test(str)
}
// 验证2-50位字符
export function validtwoToFifty(str) {
    const reg = /^[\u4E00-\u9FA5_A-Za-z0-9]{2,50}$/;
    return reg.test(str);
}
// 4位字符、只支持数字
export function validNinedata_wholeFour(str) {
    const reg = /^[0-9]{0,4}$/
    return reg.test(str)
}
// 四位字符、只支持数字 0-1000
export function validNinedata_four(str) {
    const reg = /^[0-9]{0,4}$/
    let datastr = true;
    if (str == "") { // 判断参数是不是为空
        datastr = false
    } else {
        datastr = reg.test(str);
    }
    let bort = true;
    if (datastr) { // 不为空再进行 大于1000的判断
        if (Number(str) > 1000) {
            bort = false;
        }
    } else { // 为空的话，不通过
        bort = false;
    }

    return bort
}
//输赢金额 支持 正数，负数，正小数与负小数、数字
export function validNinedata_thirteen_negative(str) {
    const reg = /(^[\-0-9][0-9]{0,11}([\.]{1}\d{1,2})?$)|(^[\-0-9][0-9]{0,14}$)/
    let datastr = true;
    if (str != "") {
        datastr = reg.test(str);
    }
    let bort = true;
    if (datastr) {
        if (-1000000000.00 > Number(str) || Number(str) > 1000000000.00) {
            bort = false
        }
    } else {
        bort = false
    }
    return bort
}
// 七位字符、只支持数字 1-1000000 
export function valid_seven_data(str) {
    const reg = /^[0-9]{1,7}$/
    let datastr = true;
    if (str == "") { // 判断参数是不是为空
        datastr = false
    } else {
        datastr = reg.test(str);
    }
    let bort = true;
    if (datastr) { // 不为空再进行 大于1000的判断
        if (Number(str) > 1000000) {
            bort = false;
        }
    } else { // 为空的话，不通过
        bort = false;
    }

    return bort
}
// 前中后去空
export function ToEmpty(str) {
    return str.replace(/\s/g, "")
}
