{
    "type": "Program",
    "body": [
      {
        "type": "CallExpression",
        "name": "add",
        "params": [
          {
            "type": "numberLiteral",
            "value": "2"
          },
          {
            "type": "CallExpression",
            "name": "subtract",
            "params": [
              {
                "type": "numberLiteral",
                "value": "4"
              },
              {
                "type": "numberLiteral",
                "value": "3"
              }
            ]
          }
        ]
      }
    ]
  }