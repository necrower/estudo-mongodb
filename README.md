estudo-mongodb



mongoimport --db database --collection collection --drop --file data.json

mongoexport --db nome_do_database --collection nome_da_colecao --out minha_colecao.json

mongo #db#

show dbs

show collections

db.createCollection()

-- Insere
db.insert()

-- insere ou atualiza um um objeto
db.save()

db.products.update(
   { _id: 100 },
   { $set:
      {
        quantity: 500,
        details: { model: "14Q3", make: "xyz" },
        tags: [ "coats", "outerwear", "clothing" ]
      }
   }
)


db.products.update(
   { _id: 100 },
   { $set: { "details.make": "zzz" } }
)

db.products.update(
   { _id: 100 },
   { $set:
      {
        "tags.1": "rain gear",
        "ratings.0.rating": 2
      }
   }
)

### override
db.documents.update({title:'Título'}, {a: 2})

### uldate
db.documents.update({a:2}, {$set: {title: 'Título XGH'}}, {multi:true})

db.restaurantes.ensureIndex({'address.coord':"2dsphere"});

db.restaurantes.find(   {     'address.coord': {       $near: {          $geometry: {           type: 'Point', coordinates: [-73.9667, 40.78]         },          $minDistance: 50, $maxDistance: 400       }     }   })

db.restaurantes.find(
  {
    'address.coord': {
      $near: {
        $geometry: {
          type: 'Point', coordinates: [-73.9667, 40.78]
        },
        $minDistance: 1000, $maxDistance: 5000
      }
    }
  })


db.restaurantes.find().limit(2).skip(5).pretty();
