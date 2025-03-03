window.BENCHMARK_DATA = {
  "lastUpdate": 1740964374869,
  "repoUrl": "https://github.com/gold-silver-copper/steel",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "zombkit",
            "username": "gold-silver-copper",
            "email": "stephen.korzen@gmail.com"
          },
          "committer": {
            "name": "zombkit",
            "username": "gold-silver-copper",
            "email": "stephen.korzen@gmail.com"
          },
          "id": "6b57d798e66c5023b2286fd35dc726e9976a37ca",
          "message": "added docs",
          "timestamp": "2025-03-02T09:36:01Z",
          "url": "https://github.com/gold-silver-copper/steel/commit/6b57d798e66c5023b2286fd35dc726e9976a37ca"
        },
        "date": 1740964374465,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 110592,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 616780,
            "range": "± 9833",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1478453,
            "range": "± 62666",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 502438,
            "range": "± 925",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 907736,
            "range": "± 2932",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1384170,
            "range": "± 125944",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 440550,
            "range": "± 3144",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 44638818,
            "range": "± 344926",
            "unit": "ns/iter"
          },
          {
            "name": "thread-creation/thread-creation",
            "value": 957965,
            "range": "± 14665",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 31803814,
            "range": "± 784916",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 196,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 8861,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 271559,
            "range": "± 8509",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}