import { PrismaClient } from "@prisma/client"; // Tive que alterar para '.' (Na aula era @prisma/client)

const prismaClient = new PrismaClient();

export default prismaClient;