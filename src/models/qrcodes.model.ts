import {Entity, model, property} from '@loopback/repository';

@model()
export class Qrcodes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  qrcode: string;


  constructor(data?: Partial<Qrcodes>) {
    super(data);
  }
}

export interface QrcodesRelations {
  // describe navigational properties here
}

export type QrcodesWithRelations = Qrcodes & QrcodesRelations;
