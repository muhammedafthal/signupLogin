{
    "clientName": "Thunder Client",
    "collectionName": "signup",
    "collectionId": "1e0b7072-94bc-48d9-8ba5-92a2b249e507",
    "dateExported": "2024-10-23T05:47:53.045Z",
    "version": "1.2",
    "folders": [
        {
            "_id": "d20afad6-1639-4a19-ba6b-c1f77e01a843",
            "name": "signup_route",
            "containerId": "",
            "created": "2024-10-22T13:50:32.093Z",
            "sortNum": 10000
        }
    ],
    "requests": [
        {
            "_id": "930e3fe5-61b5-4abf-b574-2ee8a2147a4d",
            "colId": "1e0b7072-94bc-48d9-8ba5-92a2b249e507",
            "containerId": "d20afad6-1639-4a19-ba6b-c1f77e01a843",
            "name": "SIGN_IN_TO_APPLICATION",
            "url": "http://localhost:3000/signuser/signup",
            "method": "POST",
            "sortNum": 10000,
            "created": "2024-10-22T13:50:44.922Z",
            "modified": "2024-10-23T05:41:07.990Z",
            "headers": [
                {
                    "name": "Content-Type",
                    "value": "application/json"
                }
            ],
            "body": {
                "type": "json",
                "raw": "{\n  \"username\": \"anshad\",\n  \"email\":\"anshad@email.com\",\n  \"password\": \"2000\"\n}",
                "form": []
            }
        },
        {
            "_id": "1008772b-0ab8-479f-9e52-c00686a5c13d",
            "colId": "1e0b7072-94bc-48d9-8ba5-92a2b249e507",
            "containerId": "d20afad6-1639-4a19-ba6b-c1f77e01a843",
            "name": "TO_LOG_SIGNED_USER",
            "url": "http://localhost:3000/loginuser/login",
            "method": "POST",
            "sortNum": 30000,
            "created": "2024-10-23T05:36:59.766Z",
            "modified": "2024-10-23T05:47:37.220Z",
            "headers": [
                {
                    "name": "Content-Type",
                    "value": "application/json"
                }
            ],
            "body": {
                "type": "json",
                "raw": "{\n  \"email\":\"anshad@email.com\",\n  \"password\": \"2000\"\n}",
                "form": []
            }
        }
    ],
    "ref": "GYZZFNZnjf2qK2PgSOMGp7d2-y0sFnRY7jzS6AcrRBl-WNArSiuhrQMbuhqHXNaPMqIy61N5uoTU8Zr5X_v19Q"
}