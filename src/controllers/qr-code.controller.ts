import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Qrcodes} from '../models';
import {QrcodesRepository} from '../repositories';

export class QrCodeController {
  constructor(
    @repository(QrcodesRepository)
    public qrcodesRepository : QrcodesRepository,
  ) {}

  @post('/qrcodes')
  @response(200, {
    description: 'Qrcodes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Qrcodes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Qrcodes, {
            title: 'NewQrcodes',
            exclude: ['id'],
          }),
        },
      },
    })
    qrcodes: Omit<Qrcodes, 'id'>,
  ): Promise<Qrcodes> {
    return this.qrcodesRepository.create(qrcodes);
  }

  @get('/qrcodes/count')
  @response(200, {
    description: 'Qrcodes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Qrcodes) where?: Where<Qrcodes>,
  ): Promise<Count> {
    return this.qrcodesRepository.count(where);
  }

  @get('/qrcodes')
  @response(200, {
    description: 'Array of Qrcodes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Qrcodes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Qrcodes) filter?: Filter<Qrcodes>,
  ): Promise<Qrcodes[]> {
    return this.qrcodesRepository.find(filter);
  }

  @patch('/qrcodes')
  @response(200, {
    description: 'Qrcodes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Qrcodes, {partial: true}),
        },
      },
    })
    qrcodes: Qrcodes,
    @param.where(Qrcodes) where?: Where<Qrcodes>,
  ): Promise<Count> {
    return this.qrcodesRepository.updateAll(qrcodes, where);
  }

  @get('/qrcodes/{id}')
  @response(200, {
    description: 'Qrcodes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Qrcodes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Qrcodes, {exclude: 'where'}) filter?: FilterExcludingWhere<Qrcodes>
  ): Promise<Qrcodes> {
    return this.qrcodesRepository.findById(id, filter);
  }

  @patch('/qrcodes/{id}')
  @response(204, {
    description: 'Qrcodes PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Qrcodes, {partial: true}),
        },
      },
    })
    qrcodes: Qrcodes,
  ): Promise<void> {
    await this.qrcodesRepository.updateById(id, qrcodes);
  }

  @put('/qrcodes/{id}')
  @response(204, {
    description: 'Qrcodes PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() qrcodes: Qrcodes,
  ): Promise<void> {
    await this.qrcodesRepository.replaceById(id, qrcodes);
  }

  @del('/qrcodes/{id}')
  @response(204, {
    description: 'Qrcodes DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.qrcodesRepository.deleteById(id);
  }
}
