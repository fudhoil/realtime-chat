import Redis from "ioredis";

let redis = new Redis(process.env.REDIS_URL!);

export default redis;
