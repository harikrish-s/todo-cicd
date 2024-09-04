import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { generateId } from "pkg/id";

type Request = {
  encrypted: string;
  ttl?: number;
  reads: number;
  iv: string;
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})
export default async function handler(req: NextRequest) {
  const { encrypted, ttl, reads, iv } = (await req.json()) as Request;

  const id = generateId();
  const key = ["envshare", id].join(":");

  const tx = redis.multi();

  tx.hset(key, {
    remainingReads: reads > 0 ? reads : null,
    encrypted,
    iv,
  });
  if (ttl) {
    tx.expire(key, ttl);
  }
  tx.incr("envshare:metrics:writes");

  await tx.exec();

  return NextResponse.json({ id });
}

export const config = {
  runtime: "edge",
};
