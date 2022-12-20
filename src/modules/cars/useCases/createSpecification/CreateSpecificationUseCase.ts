import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specifications: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specifications.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specifications.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
