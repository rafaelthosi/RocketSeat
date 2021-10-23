import prismaClient from "../prisma";

class GetLast3MessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3, // limite de mensagens
      orderBy: {
        created_at: "desc" // das mais novas para mais velhas
      },
      include: {
        user: true
      }
    });

    // SELECT # FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC

    return messages;
  }
}

export { GetLast3MessagesService };