import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  // No eager $connect() — Prisma connects lazily on first query.
  // This allows the NestJS app to start even when the DB is temporarily
  // unreachable (e.g. during a cold-start race with the database service).

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
