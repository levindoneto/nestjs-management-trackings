import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcordoController } from './acordo/acordo.controller';
import { AcordoService } from './acordo/acordo.service';
import { ConfigModule } from '@nestjs/config';
import { CryptoModule } from '@akanass/nestjsx-crypto';
import { HelperService } from './helper/helper.service';
import configuration from'config/configuration';


@Module({
  imports:  [ConfigModule.forRoot({
              load: [configuration],
              isGlobal: true}),
            // HttpModule.registerAsync({
            //   imports: [ConfigModule],
            //   useFactory: async (configService: ConfigService) => ({
            //     timeout: configService.getString('HTTP_TIMEOUT'),
            //     maxRedirects: configService.getString('HTTP_MAX_REDIRECTS'),
            //   }),
            //   inject: [ConfigService],
            // }),
            CryptoModule
          ],
  controllers: [AppController, AcordoController],
  providers: [  AppService, AcordoService, HelperService],
})
export class AppModule {}
