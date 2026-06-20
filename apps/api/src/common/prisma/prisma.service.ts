import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  // No eager $connect() — Prisma connects lazily on first query so the app
  // starts even when the DB is temporarily unreachable at cold-start.

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
