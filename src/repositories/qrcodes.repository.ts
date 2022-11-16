import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Qrcodes, QrcodesRelations} from '../models';

export class QrcodesRepository extends DefaultCrudRepository<
  Qrcodes,
  typeof Qrcodes.prototype.id,
  QrcodesRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Qrcodes, dataSource);
  }
}
