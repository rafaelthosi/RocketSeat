import { Specification } from "../infra/typeorm/entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
interface ISpeceficationsRepository {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpeceficationsRepository, ICreateSpecificationDTO };
