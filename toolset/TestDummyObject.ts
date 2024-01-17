import { Infer } from '@infer/Infer';

const test = [
  {
    "_id": "65a63e4d00e76ae7422eaeed",
    "index": 0,
    "guid": "431ad802-cc9e-41ad-a4a9-e18f98119b72",
    "isActive": false,
    "balance": "$1,641.58",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Reynolds Hopkins",
    "gender": "male",
    "company": "ISOPOP",
    "email": "reynoldshopkins@isopop.com",
    "phone": "+1 (892) 459-2335",
    "address": "428 Carroll Street, Blodgett, Vermont, 1765",
    "about": "Ut qui voluptate id fugiat veniam. Irure commodo ipsum quis ea enim elit Lorem amet aliquip. Est nulla deserunt cupidatat occaecat laborum sit nostrud exercitation quis. Occaecat non velit enim aliqua labore veniam quis incididunt minim nostrud labore irure officia. Sunt et aliquip deserunt aute ullamco eiusmod ex labore magna culpa proident et. Officia eu non velit tempor consectetur excepteur officia adipisicing do. Quis ad nulla excepteur nulla consectetur ullamco.\r\n",
    "registered": "2015-01-22T03:11:26 +05:00",
    "latitude": -20.010533,
    "longitude": 121.358449,
    "tags": [
      "proident",
      "minim",
      "non",
      "non",
      "mollit",
      "pariatur",
      "Lorem"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Pollard Orr"
      },
      {
        "id": 1,
        "name": "Joni Morin"
      },
      {
        "id": 2,
        "name": "Melanie Holt"
      }
    ],
    "greeting": "Hello, Reynolds Hopkins! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "65a63e4d1b996933a8f543f9",
    "index": 1,
    "guid": "8250cb4a-b99c-4e19-b1e6-98fe7deef486",
    "isActive": true,
    "balance": "$2,805.93",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "green",
    "name": "Douglas Dillard",
    "gender": "male",
    "company": "MOLTONIC",
    "email": "douglasdillard@moltonic.com",
    "phone": "+1 (921) 590-3983",
    "address": "882 Micieli Place, Floris, Georgia, 3254",
    "about": "Ullamco nostrud enim id laborum reprehenderit amet amet id. Voluptate sunt laborum Lorem dolor officia cupidatat voluptate nulla elit. Ex exercitation nulla voluptate culpa est non amet consectetur sit.\r\n",
    "registered": "2015-04-08T05:34:57 +04:00",
    "latitude": 44.888789,
    "longitude": 89.707959,
    "tags": [
      "non",
      "ullamco",
      "anim",
      "culpa",
      "esse",
      "sint",
      "nulla"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Cathy Hodges"
      },
      {
        "id": 1,
        "name": "Munoz Clark"
      },
      {
        "id": 2,
        "name": "Ethel Griffith"
      }
    ],
    "greeting": "Hello, Douglas Dillard! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "65a63e4d57323b205a6ec055",
    "index": 2,
    "guid": "e61d0de6-59c2-4ce3-ab04-47c5f5a2e918",
    "isActive": true,
    "balance": "$3,688.77",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Gutierrez Odom",
    "gender": "male",
    "company": "BOINK",
    "email": "gutierrezodom@boink.com",
    "phone": "+1 (897) 470-2685",
    "address": "766 Horace Court, Wauhillau, Connecticut, 6180",
    "about": "Pariatur ullamco sunt et cupidatat ipsum eiusmod occaecat ea consequat aliquip. Dolore cupidatat minim nulla ut velit occaecat mollit nostrud magna id sint anim. Ullamco consequat eu laborum proident.\r\n",
    "registered": "2021-03-08T02:04:47 +05:00",
    "latitude": -36.956585,
    "longitude": -16.313032,
    "tags": [
      "dolor",
      "ex",
      "officia",
      "aliquip",
      "reprehenderit",
      "laborum",
      "ex"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Foster Greer"
      },
      {
        "id": 1,
        "name": "Merrill Burgess"
      },
      {
        "id": 2,
        "name": "Martha Hall"
      }
    ],
    "greeting": "Hello, Gutierrez Odom! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "65a63e4d4c049286999351b5",
    "index": 3,
    "guid": "32cffd90-4dca-4196-9083-f337ec05ea8e",
    "isActive": true,
    "balance": "$1,162.49",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "brown",
    "name": "Barbra Nichols",
    "gender": "female",
    "company": "SHEPARD",
    "email": "barbranichols@shepard.com",
    "phone": "+1 (994) 456-3033",
    "address": "617 Jerome Street, Ruffin, Federated States Of Micronesia, 981",
    "about": "Cillum Lorem cupidatat mollit culpa. Ad qui ullamco sit tempor Lorem laboris culpa. Aliqua ipsum duis excepteur aliqua proident do velit aliqua sit. Culpa voluptate minim do quis sunt elit mollit amet tempor pariatur voluptate. Sit duis Lorem pariatur in commodo occaecat. Ullamco excepteur esse magna sit sint proident occaecat minim nulla. Id Lorem ex quis minim incididunt et cupidatat ex ea est.\r\n",
    "registered": "2015-01-30T12:24:02 +05:00",
    "latitude": -68.061547,
    "longitude": 32.699409,
    "tags": [
      "ex",
      "occaecat",
      "nostrud",
      "labore",
      "tempor",
      "labore",
      "consequat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Charmaine Barnett"
      },
      {
        "id": 1,
        "name": "Church Hamilton"
      },
      {
        "id": 2,
        "name": "Tammy Guthrie"
      }
    ],
    "greeting": "Hello, Barbra Nichols! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "65a63e4da3bb582afe74f794",
    "index": 4,
    "guid": "5cf4fbd1-40c2-4a89-9b5f-9a2d46efe9a1",
    "isActive": true,
    "balance": "$2,264.94",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "green",
    "name": "Cotton Morris",
    "gender": "male",
    "company": "ASSISTIA",
    "email": "cottonmorris@assistia.com",
    "phone": "+1 (943) 491-3623",
    "address": "690 Poly Place, Winfred, New Mexico, 8969",
    "about": "Velit irure do do cupidatat nostrud anim commodo sint consequat. Officia ipsum commodo voluptate in mollit occaecat dolor ea adipisicing enim amet aliquip laborum. Fugiat magna culpa ea id do sunt sint duis proident. Nisi quis pariatur dolor enim incididunt. Consectetur irure labore enim minim.\r\n",
    "registered": "2018-11-28T11:25:17 +05:00",
    "latitude": -74.978179,
    "longitude": 136.558116,
    "tags": [
      "culpa",
      "excepteur",
      "dolor",
      "Lorem",
      "laboris",
      "aliqua",
      "labore"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Francesca Saunders"
      },
      {
        "id": 1,
        "name": "Quinn Merritt"
      },
      {
        "id": 2,
        "name": "Margo Hogan"
      }
    ],
    "greeting": "Hello, Cotton Morris! You have 10 unread messages.",
    "favoriteFruit": "banana"
  }
]

const hi: Infer<test> = [
  {
    ""
  }
]