"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4842],{3815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api references/submerchants","title":"Submerchants","description":"Retrieve Sub Merchants","source":"@site/docs/api references/submerchants.md","sourceDirName":"api references","slug":"/api references/submerchants","permalink":"/th/api references/submerchants","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Sources","permalink":"/th/api references/sources"},"next":{"title":"Systeminfo","permalink":"/th/api references/systeminfo"}}');var i=t(74848),a=t(28453);const s={},c="Submerchants",l={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Responses",id:"responses",level:3},{value:"Status: 200",id:"status-200",level:3}];function p(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"submerchants",children:"Submerchants"})}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{class:"sub-heading",style:{flex:2},children:[(0,i.jsx)("h3",{children:"Retrieve Sub Merchants"}),(0,i.jsx)("p",{children:"Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview."})]}),(0,i.jsxs)("div",{class:"code",style:{flex:2},children:[(0,i.jsxs)("div",{class:"code-container",children:[(0,i.jsx)("div",{class:"code-header",children:"Retrieve Sub Merchants"}),(0,i.jsxs)("div",{class:"code-dropdown",children:[(0,i.jsxs)("select",{onChange:e=>handleLanguageChange(e.target),children:[(0,i.jsx)("option",{value:"curl",children:"curl"}),(0,i.jsx)("option",{value:"java",children:"java"}),(0,i.jsx)("option",{value:"android",children:"android"}),(0,i.jsx)("option",{value:"objc",children:"objc"}),(0,i.jsx)("option",{value:"javascript",children:"javascript"}),(0,i.jsx)("option",{value:"csharp",children:"csharp"}),(0,i.jsx)("option",{value:"php",children:"php"}),(0,i.jsx)("option",{value:"perl",children:"perl"}),(0,i.jsx)("option",{value:"python",children:"python"})]}),(0,i.jsx)("button",{className:"copy-btn",onClick:e=>copyActiveCode(e.currentTarget),title:"Copy to clipboard",children:(0,i.jsxs)("svg",{"aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"}),(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"})]})})]}),(0,i.jsx)("div",{class:"code-block curl active",id:"Retrieve Sub Merchants-code-curl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'curl -X GET\\\n-H "Accept: application/json"\\\n"https://api.omise.co/sub_merchants?from=&to=&offset=&limit=&order="\n'})})}),(0,i.jsx)("div",{class:"code-block java",id:"Retrieve Sub Merchants-code-java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import io.swagger.client.*;\nimport io.swagger.client.auth.*;\nimport io.swagger.client.model.*;\nimport io.swagger.client.api.SubMerchantsApi;\n\nimport java.io.File;\nimport java.util.*;\n\npublic class SubMerchantsApiExample {\n\n    public static void main(String[] args) {\n        \n        SubMerchantsApi apiInstance = new SubMerchantsApi();\n        Date from = 2013-10-20T19:20:30+01:00; // Date | \n        Date to = 2013-10-20T19:20:30+01:00; // Date | \n        Integer offset = 56; // Integer | \n        Integer limit = 56; // Integer | \n        String order = order_example; // String | \n        try {\n            list result = apiInstance.subMerchantsGet(from, to, offset, limit, order);\n            System.out.println(result);\n        } catch (ApiException e) {\n            System.err.println("Exception when calling SubMerchantsApi#subMerchantsGet");\n            e.printStackTrace();\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block android",id:"Retrieve Sub Merchants-code-android",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import io.swagger.client.api.SubMerchantsApi;\n\npublic class SubMerchantsApiExample {\n\n    public static void main(String[] args) {\n        SubMerchantsApi apiInstance = new SubMerchantsApi();\n        Date from = 2013-10-20T19:20:30+01:00; // Date | \n        Date to = 2013-10-20T19:20:30+01:00; // Date | \n        Integer offset = 56; // Integer | \n        Integer limit = 56; // Integer | \n        String order = order_example; // String | \n        try {\n            list result = apiInstance.subMerchantsGet(from, to, offset, limit, order);\n            System.out.println(result);\n        } catch (ApiException e) {\n            System.err.println("Exception when calling SubMerchantsApi#subMerchantsGet");\n            e.printStackTrace();\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block objc",id:"Retrieve Sub Merchants-code-objc",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)\nDate *to = 2013-10-20T19:20:30+01:00; //  (optional)\nInteger *offset = 56; //  (optional) (default to 0)\nInteger *limit = 56; //  (optional) (default to 20)\nString *order = order_example; //  (optional) (default to chronological)\n\nSubMerchantsApi *apiInstance = [[SubMerchantsApi alloc] init];\n\n[apiInstance subMerchantsGetWith:from\n    to:to\n    offset:offset\n    limit:limit\n    order:order\n              completionHandler: ^(list output, NSError* error) {\n                            if (output) {\n                                NSLog(@"%@", output);\n                            }\n                            if (error) {\n                                NSLog(@"Error: %@", error);\n                            }\n                        }];\n'})})}),(0,i.jsx)("div",{class:"code-block javascript",id:"Retrieve Sub Merchants-code-javascript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var OmiseApi = require('omise_api');\n\nvar api = new OmiseApi.SubMerchantsApi()\nvar opts = { \n  'from': 2013-10-20T19:20:30+01:00, // {{Date}} \n  'to': 2013-10-20T19:20:30+01:00, // {{Date}} \n  'offset': 56, // {{Integer}} \n  'limit': 56, // {{Integer}} \n  'order': order_example // {{String}} \n};\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napi.subMerchantsGet(opts, callback);\n"})})}),(0,i.jsx)("div",{class:"code-block csharp",id:"Retrieve Sub Merchants-code-csharp",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'using System;\nusing System.Diagnostics;\nusing IO.Swagger.Api;\nusing IO.Swagger.Client;\nusing IO.Swagger.Model;\n\nnamespace Example\n{\n    public class subMerchantsGetExample\n    {\n        public void main()\n        {\n\n            var apiInstance = new SubMerchantsApi();\n            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)\n            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) \n            var offset = 56;  // Integer |  (optional)  (default to 0)\n            var limit = 56;  // Integer |  (optional)  (default to 20)\n            var order = order_example;  // String |  (optional)  (default to chronological)\n\n            try\n            {\n                list result = apiInstance.subMerchantsGet(from, to, offset, limit, order);\n                Debug.WriteLine(result);\n            }\n            catch (Exception e)\n            {\n                Debug.Print("Exception when calling SubMerchantsApi.subMerchantsGet: " + e.Message );\n            }\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block php",id:"Retrieve Sub Merchants-code-php",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n$api_instance = new Swagger\\Client\\ApiSubMerchantsApi();\n$from = 2013-10-20T19:20:30+01:00; // Date | \n$to = 2013-10-20T19:20:30+01:00; // Date | \n$offset = 56; // Integer | \n$limit = 56; // Integer | \n$order = order_example; // String | \n\ntry {\n    $result = $api_instance->subMerchantsGet($from, $to, $offset, $limit, $order);\n    print_r($result);\n} catch (Exception $e) {\n    echo 'Exception when calling SubMerchantsApi->subMerchantsGet: ', $e->getMessage(), PHP_EOL;\n}\n?>\n"})})}),(0,i.jsx)("div",{class:"code-block perl",id:"Retrieve Sub Merchants-code-perl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'use Data::Dumper;\nuse WWW::SwaggerClient::Configuration;\nuse WWW::SwaggerClient::SubMerchantsApi;\n\nmy $api_instance = WWW::SwaggerClient::SubMerchantsApi->new();\nmy $from = 2013-10-20T19:20:30+01:00; # Date | \nmy $to = 2013-10-20T19:20:30+01:00; # Date | \nmy $offset = 56; # Integer | \nmy $limit = 56; # Integer | \nmy $order = order_example; # String | \n\neval { \n    my $result = $api_instance->subMerchantsGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);\n    print Dumper($result);\n};\nif ($@) {\n    warn "Exception when calling SubMerchantsApi->subMerchantsGet: $@\\n";\n}\n'})})}),(0,i.jsx)("div",{class:"code-block python",id:"Retrieve Sub Merchants-code-python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'from __future__ import print_statement\nimport time\nimport swagger_client\nfrom swagger_client.rest import ApiException\nfrom pprint import pprint\n\n# create an instance of the API class\napi_instance = swagger_client.SubMerchantsApi()\nfrom = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)\nto = 2013-10-20T19:20:30+01:00 # Date |  (optional)\noffset = 56 # Integer |  (optional) (default to 0)\nlimit = 56 # Integer |  (optional) (default to 20)\norder = order_example # String |  (optional) (default to chronological)\n\ntry: \n    api_response = api_instance.sub_merchants_get(from=from, to=to, offset=offset, limit=limit, order=order)\n    pprint(api_response)\nexcept ApiException as e:\n    print("Exception when calling SubMerchantsApi->subMerchantsGet: %s\\n" % e)\n'})})})]}),(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"from"}),(0,i.jsx)(n.td,{children:"Date (date-time)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"to"}),(0,i.jsx)(n.td,{children:"Date (date-time)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"offset"}),(0,i.jsx)(n.td,{children:"Integer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"limit"}),(0,i.jsx)(n.td,{children:"Integer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"order"}),(0,i.jsx)(n.td,{children:"String"})]})]})]})]})]}),(0,i.jsx)("div",{})]}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{class:"sub-heading",style:{flex:2},children:[(0,i.jsx)("h3",{children:"Create Sub Merchants"}),(0,i.jsx)("p",{children:"Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview."})]}),(0,i.jsxs)("div",{class:"code",style:{flex:2},children:[(0,i.jsxs)("div",{class:"code-container",children:[(0,i.jsx)("div",{class:"code-header",children:"Create Sub Merchants"}),(0,i.jsxs)("div",{class:"code-dropdown",children:[(0,i.jsxs)("select",{onChange:e=>handleLanguageChange(e.target),children:[(0,i.jsx)("option",{value:"curl",children:"curl"}),(0,i.jsx)("option",{value:"java",children:"java"}),(0,i.jsx)("option",{value:"android",children:"android"}),(0,i.jsx)("option",{value:"objc",children:"objc"}),(0,i.jsx)("option",{value:"javascript",children:"javascript"}),(0,i.jsx)("option",{value:"csharp",children:"csharp"}),(0,i.jsx)("option",{value:"php",children:"php"}),(0,i.jsx)("option",{value:"perl",children:"perl"}),(0,i.jsx)("option",{value:"python",children:"python"})]}),(0,i.jsx)("button",{className:"copy-btn",onClick:e=>copyActiveCode(e.currentTarget),title:"Copy to clipboard",children:(0,i.jsxs)("svg",{"aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"}),(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"})]})})]}),(0,i.jsx)("div",{class:"code-block curl active",id:"Create Sub Merchants-code-curl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'curl -X POST\\\n-H "Accept: application/json"\\\n-H "Content-Type: application/x-www-form-urlencoded"\\\n"https://api.omise.co/sub_merchants"\n'})})}),(0,i.jsx)("div",{class:"code-block java",id:"Create Sub Merchants-code-java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import io.swagger.client.*;\nimport io.swagger.client.auth.*;\nimport io.swagger.client.model.*;\nimport io.swagger.client.api.SubMerchantsApi;\n\nimport java.io.File;\nimport java.util.*;\n\npublic class SubMerchantsApiExample {\n\n    public static void main(String[] args) {\n        \n        SubMerchantsApi apiInstance = new SubMerchantsApi();\n        String name = name_example; // String | \n        try {\n            sub_merchant result = apiInstance.subMerchantsPost(name);\n            System.out.println(result);\n        } catch (ApiException e) {\n            System.err.println("Exception when calling SubMerchantsApi#subMerchantsPost");\n            e.printStackTrace();\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block android",id:"Create Sub Merchants-code-android",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import io.swagger.client.api.SubMerchantsApi;\n\npublic class SubMerchantsApiExample {\n\n    public static void main(String[] args) {\n        SubMerchantsApi apiInstance = new SubMerchantsApi();\n        String name = name_example; // String | \n        try {\n            sub_merchant result = apiInstance.subMerchantsPost(name);\n            System.out.println(result);\n        } catch (ApiException e) {\n            System.err.println("Exception when calling SubMerchantsApi#subMerchantsPost");\n            e.printStackTrace();\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block objc",id:"Create Sub Merchants-code-objc",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'String *name = name_example; //  (optional)\n\nSubMerchantsApi *apiInstance = [[SubMerchantsApi alloc] init];\n\n[apiInstance subMerchantsPostWith:name\n              completionHandler: ^(sub_merchant output, NSError* error) {\n                            if (output) {\n                                NSLog(@"%@", output);\n                            }\n                            if (error) {\n                                NSLog(@"Error: %@", error);\n                            }\n                        }];\n'})})}),(0,i.jsx)("div",{class:"code-block javascript",id:"Create Sub Merchants-code-javascript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var OmiseApi = require('omise_api');\n\nvar api = new OmiseApi.SubMerchantsApi()\nvar opts = { \n  'name': name_example // {{String}} \n};\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napi.subMerchantsPost(opts, callback);\n"})})}),(0,i.jsx)("div",{class:"code-block csharp",id:"Create Sub Merchants-code-csharp",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'using System;\nusing System.Diagnostics;\nusing IO.Swagger.Api;\nusing IO.Swagger.Client;\nusing IO.Swagger.Model;\n\nnamespace Example\n{\n    public class subMerchantsPostExample\n    {\n        public void main()\n        {\n\n            var apiInstance = new SubMerchantsApi();\n            var name = name_example;  // String |  (optional) \n\n            try\n            {\n                sub_merchant result = apiInstance.subMerchantsPost(name);\n                Debug.WriteLine(result);\n            }\n            catch (Exception e)\n            {\n                Debug.Print("Exception when calling SubMerchantsApi.subMerchantsPost: " + e.Message );\n            }\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block php",id:"Create Sub Merchants-code-php",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n$api_instance = new Swagger\\Client\\ApiSubMerchantsApi();\n$name = name_example; // String | \n\ntry {\n    $result = $api_instance->subMerchantsPost($name);\n    print_r($result);\n} catch (Exception $e) {\n    echo 'Exception when calling SubMerchantsApi->subMerchantsPost: ', $e->getMessage(), PHP_EOL;\n}\n?>\n"})})}),(0,i.jsx)("div",{class:"code-block perl",id:"Create Sub Merchants-code-perl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'use Data::Dumper;\nuse WWW::SwaggerClient::Configuration;\nuse WWW::SwaggerClient::SubMerchantsApi;\n\nmy $api_instance = WWW::SwaggerClient::SubMerchantsApi->new();\nmy $name = name_example; # String | \n\neval { \n    my $result = $api_instance->subMerchantsPost(name => $name);\n    print Dumper($result);\n};\nif ($@) {\n    warn "Exception when calling SubMerchantsApi->subMerchantsPost: $@\\n";\n}\n'})})}),(0,i.jsx)("div",{class:"code-block python",id:"Create Sub Merchants-code-python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'from __future__ import print_statement\nimport time\nimport swagger_client\nfrom swagger_client.rest import ApiException\nfrom pprint import pprint\n\n# create an instance of the API class\napi_instance = swagger_client.SubMerchantsApi()\nname = name_example # String |  (optional)\n\ntry: \n    api_response = api_instance.sub_merchants_post(name=name)\n    pprint(api_response)\nexcept ApiException as e:\n    print("Exception when calling SubMerchantsApi->subMerchantsPost: %s\\n" % e)\n'})})})]}),(0,i.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"String"})]})})]})]})]}),(0,i.jsx)("div",{})]}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{class:"sub-heading",style:{flex:2},children:[(0,i.jsx)("h3",{children:"Retrieve Sub Merchants Search"}),(0,i.jsx)("p",{children:"Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview."})]}),(0,i.jsxs)("div",{class:"code",style:{flex:2},children:[(0,i.jsxs)("div",{class:"code-container",children:[(0,i.jsx)("div",{class:"code-header",children:"Retrieve Sub Merchants Search"}),(0,i.jsxs)("div",{class:"code-dropdown",children:[(0,i.jsxs)("select",{onChange:e=>handleLanguageChange(e.target),children:[(0,i.jsx)("option",{value:"curl",children:"curl"}),(0,i.jsx)("option",{value:"java",children:"java"}),(0,i.jsx)("option",{value:"android",children:"android"}),(0,i.jsx)("option",{value:"objc",children:"objc"}),(0,i.jsx)("option",{value:"javascript",children:"javascript"}),(0,i.jsx)("option",{value:"csharp",children:"csharp"}),(0,i.jsx)("option",{value:"php",children:"php"}),(0,i.jsx)("option",{value:"perl",children:"perl"}),(0,i.jsx)("option",{value:"python",children:"python"})]}),(0,i.jsx)("button",{className:"copy-btn",onClick:e=>copyActiveCode(e.currentTarget),title:"Copy to clipboard",children:(0,i.jsxs)("svg",{"aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"}),(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"})]})})]}),(0,i.jsx)("div",{class:"code-block curl active",id:"Retrieve Sub Merchants Search-code-curl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'curl -X GET\\\n-H "Accept: application/json"\\\n"https://api.omise.co/sub_merchants/search?scope=&query=&filters[agreement_accepted]=&filters[created]=&filters[live_activated]=&filters[owner_uid]=&filters[registration_status]="\n'})})}),(0,i.jsx)("div",{class:"code-block java",id:"Retrieve Sub Merchants Search-code-java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import io.swagger.client.*;\nimport io.swagger.client.auth.*;\nimport io.swagger.client.model.*;\nimport io.swagger.client.api.SubMerchantsApi;\n\nimport java.io.File;\nimport java.util.*;\n\npublic class SubMerchantsApiExample {\n\n    public static void main(String[] args) {\n        \n        SubMerchantsApi apiInstance = new SubMerchantsApi();\n        String scope = scope_example; // String | \n        String query = query_example; // String | \n        Integer filters[agreementAccepted] = 56; // Integer | \n        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | \n        Boolean filters[liveActivated] = true; // Boolean | \n        String filters[ownerUid] = filters[ownerUid]_example; // String | \n        String filters[registrationStatus] = filters[registrationStatus]_example; // String | \n        try {\n            sub_merchant result = apiInstance.subMerchantsSearchGet(scope, query, filters[agreementAccepted], filters[created], filters[liveActivated], filters[ownerUid], filters[registrationStatus]);\n            System.out.println(result);\n        } catch (ApiException e) {\n            System.err.println("Exception when calling SubMerchantsApi#subMerchantsSearchGet");\n            e.printStackTrace();\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block android",id:"Retrieve Sub Merchants Search-code-android",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import io.swagger.client.api.SubMerchantsApi;\n\npublic class SubMerchantsApiExample {\n\n    public static void main(String[] args) {\n        SubMerchantsApi apiInstance = new SubMerchantsApi();\n        String scope = scope_example; // String | \n        String query = query_example; // String | \n        Integer filters[agreementAccepted] = 56; // Integer | \n        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | \n        Boolean filters[liveActivated] = true; // Boolean | \n        String filters[ownerUid] = filters[ownerUid]_example; // String | \n        String filters[registrationStatus] = filters[registrationStatus]_example; // String | \n        try {\n            sub_merchant result = apiInstance.subMerchantsSearchGet(scope, query, filters[agreementAccepted], filters[created], filters[liveActivated], filters[ownerUid], filters[registrationStatus]);\n            System.out.println(result);\n        } catch (ApiException e) {\n            System.err.println("Exception when calling SubMerchantsApi#subMerchantsSearchGet");\n            e.printStackTrace();\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block objc",id:"Retrieve Sub Merchants Search-code-objc",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'String *scope = scope_example; //  (optional) (default to sub_merchant)\nString *query = query_example; //  (optional)\nInteger *filters[agreementAccepted] = 56; //  (optional)\nDate *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)\nBoolean *filters[liveActivated] = true; //  (optional)\nString *filters[ownerUid] = filters[ownerUid]_example; //  (optional)\nString *filters[registrationStatus] = filters[registrationStatus]_example; //  (optional)\n\nSubMerchantsApi *apiInstance = [[SubMerchantsApi alloc] init];\n\n[apiInstance subMerchantsSearchGetWith:scope\n    query:query\n    filters[agreementAccepted]:filters[agreementAccepted]\n    filters[created]:filters[created]\n    filters[liveActivated]:filters[liveActivated]\n    filters[ownerUid]:filters[ownerUid]\n    filters[registrationStatus]:filters[registrationStatus]\n              completionHandler: ^(sub_merchant output, NSError* error) {\n                            if (output) {\n                                NSLog(@"%@", output);\n                            }\n                            if (error) {\n                                NSLog(@"Error: %@", error);\n                            }\n                        }];\n'})})}),(0,i.jsx)("div",{class:"code-block javascript",id:"Retrieve Sub Merchants Search-code-javascript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var OmiseApi = require('omise_api');\n\nvar api = new OmiseApi.SubMerchantsApi()\nvar opts = { \n  'scope': scope_example, // {{String}} \n  'query': query_example, // {{String}} \n  'filters[agreementAccepted]': 56, // {{Integer}} \n  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} \n  'filters[liveActivated]': true, // {{Boolean}} \n  'filters[ownerUid]': filters[ownerUid]_example, // {{String}} \n  'filters[registrationStatus]': filters[registrationStatus]_example // {{String}} \n};\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napi.subMerchantsSearchGet(opts, callback);\n"})})}),(0,i.jsx)("div",{class:"code-block csharp",id:"Retrieve Sub Merchants Search-code-csharp",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'using System;\nusing System.Diagnostics;\nusing IO.Swagger.Api;\nusing IO.Swagger.Client;\nusing IO.Swagger.Model;\n\nnamespace Example\n{\n    public class subMerchantsSearchGetExample\n    {\n        public void main()\n        {\n\n            var apiInstance = new SubMerchantsApi();\n            var scope = scope_example;  // String |  (optional)  (default to sub_merchant)\n            var query = query_example;  // String |  (optional) \n            var filters[agreementAccepted] = 56;  // Integer |  (optional) \n            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) \n            var filters[liveActivated] = true;  // Boolean |  (optional) \n            var filters[ownerUid] = filters[ownerUid]_example;  // String |  (optional) \n            var filters[registrationStatus] = filters[registrationStatus]_example;  // String |  (optional) \n\n            try\n            {\n                sub_merchant result = apiInstance.subMerchantsSearchGet(scope, query, filters[agreementAccepted], filters[created], filters[liveActivated], filters[ownerUid], filters[registrationStatus]);\n                Debug.WriteLine(result);\n            }\n            catch (Exception e)\n            {\n                Debug.Print("Exception when calling SubMerchantsApi.subMerchantsSearchGet: " + e.Message );\n            }\n        }\n    }\n}\n'})})}),(0,i.jsx)("div",{class:"code-block php",id:"Retrieve Sub Merchants Search-code-php",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n$api_instance = new Swagger\\Client\\ApiSubMerchantsApi();\n$scope = scope_example; // String | \n$query = query_example; // String | \n$filters[agreementAccepted] = 56; // Integer | \n$filters[created] = 2013-10-20T19:20:30+01:00; // Date | \n$filters[liveActivated] = true; // Boolean | \n$filters[ownerUid] = filters[ownerUid]_example; // String | \n$filters[registrationStatus] = filters[registrationStatus]_example; // String | \n\ntry {\n    $result = $api_instance->subMerchantsSearchGet($scope, $query, $filters[agreementAccepted], $filters[created], $filters[liveActivated], $filters[ownerUid], $filters[registrationStatus]);\n    print_r($result);\n} catch (Exception $e) {\n    echo 'Exception when calling SubMerchantsApi->subMerchantsSearchGet: ', $e->getMessage(), PHP_EOL;\n}\n?>\n"})})}),(0,i.jsx)("div",{class:"code-block perl",id:"Retrieve Sub Merchants Search-code-perl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'use Data::Dumper;\nuse WWW::SwaggerClient::Configuration;\nuse WWW::SwaggerClient::SubMerchantsApi;\n\nmy $api_instance = WWW::SwaggerClient::SubMerchantsApi->new();\nmy $scope = scope_example; # String | \nmy $query = query_example; # String | \nmy $filters[agreementAccepted] = 56; # Integer | \nmy $filters[created] = 2013-10-20T19:20:30+01:00; # Date | \nmy $filters[liveActivated] = true; # Boolean | \nmy $filters[ownerUid] = filters[ownerUid]_example; # String | \nmy $filters[registrationStatus] = filters[registrationStatus]_example; # String | \n\neval { \n    my $result = $api_instance->subMerchantsSearchGet(scope => $scope, query => $query, filters[agreementAccepted] => $filters[agreementAccepted], filters[created] => $filters[created], filters[liveActivated] => $filters[liveActivated], filters[ownerUid] => $filters[ownerUid], filters[registrationStatus] => $filters[registrationStatus]);\n    print Dumper($result);\n};\nif ($@) {\n    warn "Exception when calling SubMerchantsApi->subMerchantsSearchGet: $@\\n";\n}\n'})})}),(0,i.jsx)("div",{class:"code-block python",id:"Retrieve Sub Merchants Search-code-python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'from __future__ import print_statement\nimport time\nimport swagger_client\nfrom swagger_client.rest import ApiException\nfrom pprint import pprint\n\n# create an instance of the API class\napi_instance = swagger_client.SubMerchantsApi()\nscope = scope_example # String |  (optional) (default to sub_merchant)\nquery = query_example # String |  (optional)\nfilters[agreementAccepted] = 56 # Integer |  (optional)\nfilters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)\nfilters[liveActivated] = true # Boolean |  (optional)\nfilters[ownerUid] = filters[ownerUid]_example # String |  (optional)\nfilters[registrationStatus] = filters[registrationStatus]_example # String |  (optional)\n\ntry: \n    api_response = api_instance.sub_merchants_search_get(scope=scope, query=query, filters[agreementAccepted]=filters[agreementAccepted], filters[created]=filters[created], filters[liveActivated]=filters[liveActivated], filters[ownerUid]=filters[ownerUid], filters[registrationStatus]=filters[registrationStatus])\n    pprint(api_response)\nexcept ApiException as e:\n    print("Exception when calling SubMerchantsApi->subMerchantsSearchGet: %s\\n" % e)\n'})})})]}),(0,i.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"query"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filters[agreement_accepted]"}),(0,i.jsx)(n.td,{children:"Integer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filters[created]"}),(0,i.jsx)(n.td,{children:"Date (date-time)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filters[live_activated]"}),(0,i.jsx)(n.td,{children:"Boolean"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filters[owner_uid]"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filters[registration_status]"}),(0,i.jsx)(n.td,{children:"String"})]})]})]})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.h3,{id:"responses",children:"Responses"}),(0,i.jsx)(n.h3,{id:"status-200",children:"Status: 200"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:' {\n  "object": {\n    "pattern": "sub_merchant",\n    "type": "string",\n    "default": "sub_merchant"\n  },\n  "id": {\n    "type": "string"\n  },\n  "name": {\n    "type": "string"\n  },\n  "live_account_status": {\n    "type": "string",\n    "enum": [\n      "unsubmitted",\n      "start",\n      "pending",\n      "accepted",\n      "rejected"\n    ]\n  },\n  "live_account_registration_id": {\n    "type": "string"\n  },\n  "default_mid": {\n    "type": "string"\n  },\n  "parent_team_id": {\n    "type": "string"\n  },\n  "direct_children_count": {\n    "type": "integer"\n  },\n  "created_at": {\n    "type": "string",\n    "format": "date-time"\n  },\n  "level": {\n    "type": "integer"\n  }\n} \n'})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);