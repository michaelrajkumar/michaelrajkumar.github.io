# Forex


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Forex Currency</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Forex Currency</div>
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
              
<div class="code-block curl active" id="Retrieve Forex Currency-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/forex/{currency}"
```
</div>

<div class="code-block java" id="Retrieve Forex Currency-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ForexApi;

import java.io.File;
import java.util.*;

public class ForexApiExample {

    public static void main(String[] args) {
        
        ForexApi apiInstance = new ForexApi();
        String currency = currency_example; // String | 
        try {
            forex result = apiInstance.forexCurrencyGet(currency);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ForexApi#forexCurrencyGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Forex Currency-code-android">
```js
import io.swagger.client.api.ForexApi;

public class ForexApiExample {

    public static void main(String[] args) {
        ForexApi apiInstance = new ForexApi();
        String currency = currency_example; // String | 
        try {
            forex result = apiInstance.forexCurrencyGet(currency);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ForexApi#forexCurrencyGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Forex Currency-code-objc">
```js
String *currency = currency_example; // 

ForexApi *apiInstance = [[ForexApi alloc] init];

[apiInstance forexCurrencyGetWith:currency
              completionHandler: ^(forex output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Forex Currency-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ForexApi()
var currency = currency_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.forexCurrencyGet(currency, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Forex Currency-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class forexCurrencyGetExample
    {
        public void main()
        {

            var apiInstance = new ForexApi();
            var currency = currency_example;  // String | 

            try
            {
                forex result = apiInstance.forexCurrencyGet(currency);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ForexApi.forexCurrencyGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Forex Currency-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiForexApi();
$currency = currency_example; // String | 

try {
    $result = $api_instance->forexCurrencyGet($currency);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->forexCurrencyGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Forex Currency-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ForexApi;

my $api_instance = WWW::SwaggerClient::ForexApi->new();
my $currency = currency_example; # String | 

eval { 
    my $result = $api_instance->forexCurrencyGet(currency => $currency);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ForexApi->forexCurrencyGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Forex Currency-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ForexApi()
currency = currency_example # String | 

try: 
    api_response = api_instance.forex_currency_get(currency)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->forexCurrencyGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| currency* | String Required |

          </div>
        </div>
        <div>
          ### Responses

 ### Status: 200

```json
 {
  "object": {
    "pattern": "forex",
    "type": "string",
    "default": "forex"
  },
  "rate": {
    "type": "number",
    "format": "float"
  },
  "location": {
    "type": "string"
  },
  "livemode": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "base": {
    "type": "string",
    "format": "currency"
  },
  "quote": {
    "type": "string",
    "format": "currency"
  }
} 
```

        </div>
      </div>

