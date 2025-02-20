import { MongoClient } from "mongodb";

const uri =
  process.env.MONGODB_URI ||
  "mongodb://adminUser:StrongPassword123!@194.87.202.43:27017/tiktok_streamers?authSource=tiktok_streamers";

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

clientPromise
  .then(() => console.log("✅ تم الاتصال بـ MongoDB بنجاح"))
  .catch((err) => console.error("❌ فشل الاتصال بـ MongoDB:", err));

export default clientPromise;
