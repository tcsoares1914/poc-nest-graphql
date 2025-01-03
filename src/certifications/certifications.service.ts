import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateCertificationInput } from '@src/certifications/dto/create-certification.input';
import { UpdateCertificationInput } from '@src/certifications/dto/update-certification.input';
import { Certification } from '@src/certifications/schemas/certification.schema';

@Injectable()
export class CertificationsService {
  /**
   * Inject repository dependency.
   *
   * @param {Model<Certification>} certificationModel The certification model.
   */
  constructor(
    @InjectModel(Certification.name)
    private certificationModel: Model<Certification>,
  ) {}

  /**
   * Create a new certification.
   *
   * @public
   * @param {createCertificationInput} createCertificationInput input certification data.
   * @returns {Promise<Certification>} The created certification.
   */
  public async create(
    createCertificationInput: CreateCertificationInput,
  ): Promise<Certification> {
    const user = new this.certificationModel(createCertificationInput);
    const newUser = await user.save();

    if (!newUser) {
      throw new InternalServerErrorException(
        'Problem to create a new certification. Try again!',
      );
    }

    return newUser;
  }

  /**
   * Find all certifications.
   *
   * @public
   * @returns {Promise<Certification[]>} All certifications list.
   */
  public async findAll(): Promise<Certification[]> {
    const certifications = await this.certificationModel.find();

    return certifications;
  }

  /**
   * Find a certification by ID.
   *
   * @public
   * @param {string} id Certification ID.
   * @returns {Promise<Certification>} The found certification.
   */
  public async findOne(id: string): Promise<Certification> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('ID must be a ObjectId!');
    }
    const certification = await this.certificationModel.findById(id);

    if (!certification) {
      throw new NotFoundException('Certification not found!');
    }

    return certification;
  }

  /**
   * Update a certification by ID.
   *
   * @public
   * @param {string} id Certification ID.
   * @param {updateCertificationInput} updateCertificationInput input certification data.
   * @returns {Promise<Certification>} The updated certification.
   */
  public async update(
    id: string,
    updateCertificationInput: UpdateCertificationInput,
  ): Promise<Certification> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('ID must be a ObjectId!');
    }
    const certification = await this.certificationModel.findByIdAndUpdate(
      id,
      updateCertificationInput,
    );

    if (!certification) {
      throw new NotFoundException('Certification not found!');
    }

    return certification;
  }

  /**
   * Remove a certification by ID.
   *
   * @public
   * @param {string} id Certification ID.
   * @returns {Promise<Certification>} The removed certification.
   */
  public async remove(id: string): Promise<Certification> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('ID must be a ObjectId!');
    }
    const certification = this.certificationModel.findByIdAndDelete(id);

    if (!certification) {
      throw new NotFoundException('Certification not found!');
    }

    return certification;
  }
}
