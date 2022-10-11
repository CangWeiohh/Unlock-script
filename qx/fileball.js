/******************************

脚本功能：fileball+解锁订阅
下载地址：美区
软件版本：1.2.5
脚本作者：彭于晏
更新时间：2022-9-19
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body fileball.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 416505600000,
  "request_date" : "1983-03-15T00:00:00Z",
  "subscriber" : {
    "non_subscriptions" : {
      "filebox_pro" : [
        {
          "id" : "yingzi",
          "is_sandbox" : false,
          "purchase_date" : "1983-03-15T00:00:00Z",
          "original_purchase_date" : "1983-03-15T00:00:00Z",
          "store" : "app_store"
        }
      ]
    },
    "first_seen" : "1983-03-15T00:00:00Z",
    "original_application_version" : "170",
    "other_purchases" : {
      "filebox_pro" : {
        "purchase_date" : "1983-03-15T00:00:00Z"
      }
    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {
      "filebox_pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "1983-03-15T00:00:00Z",
        "product_identifier" : "filebox_pro",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "1983-03-15T00:00:00Z",
    "original_app_user_id" : "$RCAnonymousID%3A8e5a11e56b4246f2ab2b17058c01db1e",
    "last_seen" : "1983-03-15T00:00:00Z"
  }
}




$done({body : JSON.stringify(objc)});
