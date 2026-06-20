#!/bin/sh

echo "[startup] Running Prisma migrations..."

PRISMA_BIN="node_modules/.bin/prisma"
if [ ! -f "$PRISMA_BIN" ]; then
  PRISMA_BIN="../../node_modules/.bin/prisma"
fi

if [ ! -f "$PRISMA_BIN" ]; then
  echo "[startup] WARNING: prisma CLI not found, skipping migrations"
else
  "$PRISMA_BIN" migrate deploy || echo "[startup] WARNING: migrations failed (schema may already be up to date), continuing..."
fi

echo "[startup] Starting NestJS API..."
exec node dist/main
