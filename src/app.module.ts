import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';
import { Postgresql } from './postgresql.provider';

@Module({
  imports: [UserModule, BoardModule, CommentModule],
  controllers: [AppController],
  providers: [AppService, Postgresql],
})
export class AppModule {}
