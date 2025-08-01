# Linkedaccounts


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Linked Accounts</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Linked Accounts</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Retrieve Linked Accounts-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/linked_accounts?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Linked Accounts-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinkedAccountsApi;

import java.io.File;
import java.util.*;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.linkedAccountsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Linked Accounts-code-android">
```js
import io.swagger.client.api.LinkedAccountsApi;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.linkedAccountsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Linked Accounts-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

LinkedAccountsApi *apiInstance = [[LinkedAccountsApi alloc] init];

[apiInstance linkedAccountsGetWith:from
    to:to
    offset:offset
    limit:limit
    order:order
              completionHandler: ^(list output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Linked Accounts-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinkedAccountsApi()
var opts = { 
  'from': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'to': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'offset': 56, // {{Integer}} 
  'limit': 56, // {{Integer}} 
  'order': order_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linkedAccountsGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Linked Accounts-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linkedAccountsGetExample
    {
        public void main()
        {

            var apiInstance = new LinkedAccountsApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.linkedAccountsGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinkedAccountsApi.linkedAccountsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Linked Accounts-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinkedAccountsApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->linkedAccountsGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinkedAccountsApi->linkedAccountsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Linked Accounts-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinkedAccountsApi;

my $api_instance = WWW::SwaggerClient::LinkedAccountsApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->linkedAccountsGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinkedAccountsApi->linkedAccountsGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Linked Accounts-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinkedAccountsApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.linked_accounts_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinkedAccountsApi->linkedAccountsGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| from | Date (date-time) |
| to | Date (date-time) |
| offset | Integer |
| limit | Integer |
| order | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Delete Linked Accounts ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Delete Linked Accounts ID</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Delete Linked Accounts ID-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/linked_accounts/{id}"
```
</div>

<div class="code-block java" id="Delete Linked Accounts ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinkedAccountsApi;

import java.io.File;
import java.util.*;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        String id = id_example; // String | 
        try {
            linked_account result = apiInstance.linkedAccountsIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Delete Linked Accounts ID-code-android">
```js
import io.swagger.client.api.LinkedAccountsApi;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        String id = id_example; // String | 
        try {
            linked_account result = apiInstance.linkedAccountsIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Delete Linked Accounts ID-code-objc">
```js
String *id = id_example; // 

LinkedAccountsApi *apiInstance = [[LinkedAccountsApi alloc] init];

[apiInstance linkedAccountsIdDeleteWith:id
              completionHandler: ^(linked_account output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Delete Linked Accounts ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinkedAccountsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linkedAccountsIdDelete(id, callback);
```
</div>

<div class="code-block csharp" id="Delete Linked Accounts ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linkedAccountsIdDeleteExample
    {
        public void main()
        {

            var apiInstance = new LinkedAccountsApi();
            var id = id_example;  // String | 

            try
            {
                linked_account result = apiInstance.linkedAccountsIdDelete(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinkedAccountsApi.linkedAccountsIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Delete Linked Accounts ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinkedAccountsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->linkedAccountsIdDelete($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinkedAccountsApi->linkedAccountsIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Delete Linked Accounts ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinkedAccountsApi;

my $api_instance = WWW::SwaggerClient::LinkedAccountsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->linkedAccountsIdDelete(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinkedAccountsApi->linkedAccountsIdDelete: $@\n";
}
```
</div>

<div class="code-block python" id="Delete Linked Accounts ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinkedAccountsApi()
id = id_example # String | 

try: 
    api_response = api_instance.linked_accounts_id_delete(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinkedAccountsApi->linkedAccountsIdDelete: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Linked Accounts ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Linked Accounts ID</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Retrieve Linked Accounts ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/linked_accounts/{id}"
```
</div>

<div class="code-block java" id="Retrieve Linked Accounts ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinkedAccountsApi;

import java.io.File;
import java.util.*;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        String id = id_example; // String | 
        try {
            linked_account result = apiInstance.linkedAccountsIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Linked Accounts ID-code-android">
```js
import io.swagger.client.api.LinkedAccountsApi;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        String id = id_example; // String | 
        try {
            linked_account result = apiInstance.linkedAccountsIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Linked Accounts ID-code-objc">
```js
String *id = id_example; // 

LinkedAccountsApi *apiInstance = [[LinkedAccountsApi alloc] init];

[apiInstance linkedAccountsIdGetWith:id
              completionHandler: ^(linked_account output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Linked Accounts ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinkedAccountsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linkedAccountsIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Linked Accounts ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linkedAccountsIdGetExample
    {
        public void main()
        {

            var apiInstance = new LinkedAccountsApi();
            var id = id_example;  // String | 

            try
            {
                linked_account result = apiInstance.linkedAccountsIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinkedAccountsApi.linkedAccountsIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Linked Accounts ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinkedAccountsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->linkedAccountsIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinkedAccountsApi->linkedAccountsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Linked Accounts ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinkedAccountsApi;

my $api_instance = WWW::SwaggerClient::LinkedAccountsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->linkedAccountsIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinkedAccountsApi->linkedAccountsIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Linked Accounts ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinkedAccountsApi()
id = id_example # String | 

try: 
    api_response = api_instance.linked_accounts_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinkedAccountsApi->linkedAccountsIdGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Create Linked Accounts</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Linked Accounts</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Create Linked Accounts-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/linked_accounts"
```
</div>

<div class="code-block java" id="Create Linked Accounts-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinkedAccountsApi;

import java.io.File;
import java.util.*;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        String returnUri = returnUri_example; // String | 
        String type = type_example; // String | 
        Object metadata = ; // Object | 
        String citizenId = citizenId_example; // String | 
        try {
            linked_account result = apiInstance.linkedAccountsPost(returnUri, type, metadata, citizenId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Linked Accounts-code-android">
```js
import io.swagger.client.api.LinkedAccountsApi;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        String returnUri = returnUri_example; // String | 
        String type = type_example; // String | 
        Object metadata = ; // Object | 
        String citizenId = citizenId_example; // String | 
        try {
            linked_account result = apiInstance.linkedAccountsPost(returnUri, type, metadata, citizenId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Linked Accounts-code-objc">
```js
String *returnUri = returnUri_example; //  (optional)
String *type = type_example; //  (optional)
Object *metadata = ; //  (optional)
String *citizenId = citizenId_example; //  (optional)

LinkedAccountsApi *apiInstance = [[LinkedAccountsApi alloc] init];

[apiInstance linkedAccountsPostWith:returnUri
    type:type
    metadata:metadata
    citizenId:citizenId
              completionHandler: ^(linked_account output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Linked Accounts-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinkedAccountsApi()
var opts = { 
  'returnUri': returnUri_example // {{String}} 
  'type': type_example // {{String}} 
  'metadata':  // {{Object}} 
  'citizenId': citizenId_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linkedAccountsPost(opts, callback);
```
</div>

<div class="code-block csharp" id="Create Linked Accounts-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linkedAccountsPostExample
    {
        public void main()
        {

            var apiInstance = new LinkedAccountsApi();
            var returnUri = returnUri_example;  // String |  (optional) 
            var type = type_example;  // String |  (optional) 
            var metadata = new Object(); // Object |  (optional) 
            var citizenId = citizenId_example;  // String |  (optional) 

            try
            {
                linked_account result = apiInstance.linkedAccountsPost(returnUri, type, metadata, citizenId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinkedAccountsApi.linkedAccountsPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Linked Accounts-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinkedAccountsApi();
$returnUri = returnUri_example; // String | 
$type = type_example; // String | 
$metadata = ; // Object | 
$citizenId = citizenId_example; // String | 

try {
    $result = $api_instance->linkedAccountsPost($returnUri, $type, $metadata, $citizenId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinkedAccountsApi->linkedAccountsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Linked Accounts-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinkedAccountsApi;

my $api_instance = WWW::SwaggerClient::LinkedAccountsApi->new();
my $returnUri = returnUri_example; # String | 
my $type = type_example; # String | 
my $metadata = ; # Object | 
my $citizenId = citizenId_example; # String | 

eval { 
    my $result = $api_instance->linkedAccountsPost(returnUri => $returnUri, type => $type, metadata => $metadata, citizenId => $citizenId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinkedAccountsApi->linkedAccountsPost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Linked Accounts-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinkedAccountsApi()
returnUri = returnUri_example # String |  (optional)
type = type_example # String |  (optional)
metadata =  # Object |  (optional)
citizenId = citizenId_example # String |  (optional)

try: 
    api_response = api_instance.linked_accounts_post(returnUri=returnUri, type=type, metadata=metadata, citizenId=citizenId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinkedAccountsApi->linkedAccountsPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| return_uri | String |
| type | String |
| metadata | Object |
| citizen_id | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Linked Accounts Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Linked Accounts Search</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Retrieve Linked Accounts Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/linked_accounts/search?scope=&query=&filters[created]=&filters[status]=&filters[type]="
```
</div>

<div class="code-block java" id="Retrieve Linked Accounts Search-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinkedAccountsApi;

import java.io.File;
import java.util.*;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[status] = filters[status]_example; // String | 
        String filters[type] = filters[type]_example; // String | 
        try {
            linked_account result = apiInstance.linkedAccountsSearchGet(scope, query, filters[created], filters[status], filters[type]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Linked Accounts Search-code-android">
```js
import io.swagger.client.api.LinkedAccountsApi;

public class LinkedAccountsApiExample {

    public static void main(String[] args) {
        LinkedAccountsApi apiInstance = new LinkedAccountsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[status] = filters[status]_example; // String | 
        String filters[type] = filters[type]_example; // String | 
        try {
            linked_account result = apiInstance.linkedAccountsSearchGet(scope, query, filters[created], filters[status], filters[type]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinkedAccountsApi#linkedAccountsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Linked Accounts Search-code-objc">
```js
String *scope = scope_example; //  (optional) (default to linked_account)
String *query = query_example; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
String *filters[status] = filters[status]_example; //  (optional)
String *filters[type] = filters[type]_example; //  (optional)

LinkedAccountsApi *apiInstance = [[LinkedAccountsApi alloc] init];

[apiInstance linkedAccountsSearchGetWith:scope
    query:query
    filters[created]:filters[created]
    filters[status]:filters[status]
    filters[type]:filters[type]
              completionHandler: ^(linked_account output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Linked Accounts Search-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinkedAccountsApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[status]': filters[status]_example, // {{String}} 
  'filters[type]': filters[type]_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linkedAccountsSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Linked Accounts Search-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linkedAccountsSearchGetExample
    {
        public void main()
        {

            var apiInstance = new LinkedAccountsApi();
            var scope = scope_example;  // String |  (optional)  (default to linked_account)
            var query = query_example;  // String |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[status] = filters[status]_example;  // String |  (optional) 
            var filters[type] = filters[type]_example;  // String |  (optional) 

            try
            {
                linked_account result = apiInstance.linkedAccountsSearchGet(scope, query, filters[created], filters[status], filters[type]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinkedAccountsApi.linkedAccountsSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Linked Accounts Search-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinkedAccountsApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[status] = filters[status]_example; // String | 
$filters[type] = filters[type]_example; // String | 

try {
    $result = $api_instance->linkedAccountsSearchGet($scope, $query, $filters[created], $filters[status], $filters[type]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinkedAccountsApi->linkedAccountsSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Linked Accounts Search-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinkedAccountsApi;

my $api_instance = WWW::SwaggerClient::LinkedAccountsApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[status] = filters[status]_example; # String | 
my $filters[type] = filters[type]_example; # String | 

eval { 
    my $result = $api_instance->linkedAccountsSearchGet(scope => $scope, query => $query, filters[created] => $filters[created], filters[status] => $filters[status], filters[type] => $filters[type]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinkedAccountsApi->linkedAccountsSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Linked Accounts Search-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinkedAccountsApi()
scope = scope_example # String |  (optional) (default to linked_account)
query = query_example # String |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[status] = filters[status]_example # String |  (optional)
filters[type] = filters[type]_example # String |  (optional)

try: 
    api_response = api_instance.linked_accounts_search_get(scope=scope, query=query, filters[created]=filters[created], filters[status]=filters[status], filters[type]=filters[type])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinkedAccountsApi->linkedAccountsSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[created] | Date (date-time) |
| filters[status] | String |
| filters[type] | String |

          </div>
        </div>
        <div>
          ### Responses

 ### Status: 200

```json
 {
  "object": {
    "pattern": "linked_account",
    "type": "string",
    "default": "linked_account"
  },
  "id": {
    "type": "string"
  },
  "livemode": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "location": {
    "type": "string"
  },
  "registration_uri": {
    "type": "string",
    "format": "uri"
  },
  "return_uri": {
    "type": "string",
    "format": "uri"
  },
  "type": {
    "type": "string"
  },
  "status": {
    "type": "string",
    "enum": [
      "failed",
      "expired",
      "deleted",
      "pending",
      "successful"
    ]
  },
  "last_digits": {
    "type": "string",
    "nullable": true
  },
  "metadata": {
    "type": "object",
    "default": {}
  },
  "failure_code": {
    "type": "string",
    "nullable": true
  },
  "failure_message": {
    "type": "string",
    "nullable": true
  },
  "registered_at": {
    "type": "string",
    "format": "date-time"
  },
  "expires_at": {
    "type": "string",
    "format": "date-time"
  },
  "created_at": {
    "type": "string",
    "format": "date-time"
  }
} 
```

        </div>
      </div>

