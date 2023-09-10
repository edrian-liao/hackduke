import { MongoClient } from 'mongodb'

// Connection URL
const username = encodeURIComponent('annabelle');
const password = encodeURIComponent('lwy9Ao3mpoDAVEeN');
const url = `mongodb+srv://${username}:${password}@hackduke.hasnibk.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url)

// const originalData = {"description":{"title":"Contiguous U.S., Average Temperature, January-December","units":"Degrees Fahrenheit","base_period":"1901-2000","missing":"-99"},"data":{"189512":{"value":"50.34","anomaly":"-1.68"},"189612":{"value":"51.99","anomaly":"-0.03"},"189712":{"value":"51.56","anomaly":"-0.46"},"189812":{"value":"51.43","anomaly":"-0.59"},"189912":{"value":"51.01","anomaly":"-1.01"},"190012":{"value":"52.77","anomaly":"0.75"},"190112":{"value":"51.87","anomaly":"-0.15"},"190212":{"value":"51.59","anomaly":"-0.43"}}}

// const dataForMongo = Object.entries(originalData.data).map(([date, { value, anomaly }]) => ({ date, value: Number(value), anomaly: Number(anomaly) }))

async function main() {
  await client.connect()
  console.log('Connected successfully to MongoDB')
  
  // add data
  // const db = client.db("pillbox")
  // const collection = db.collection('box_status')

  // console.log("inserting", await collection.insertMany(dataForMongo))

  process.exit(0)
}

main()
