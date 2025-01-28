export const counterAbi = [
  {
    "type": "impl",
    "name": "TestSession",
    "interface_name": "counter::ITestSession"
  },
  {
    "type": "interface",
    "name": "counter::ITestSession",
    "items": [
      {
        "type": "function",
        "name": "increase_counter",
        "inputs": [
          {
            "name": "value",
            "type": "core::integer::u128"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_counter",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u128"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "event",
    "name": "counter::test_session::Event",
    "kind": "enum",
    "variants": []
  }
] as const;