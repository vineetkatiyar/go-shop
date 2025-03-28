import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";
import { hash } from "@/lib/encrypt";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Seeding database...");

    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });

    const users = await Promise.all(
      sampleData.users.map(async (user) => ({
        ...user,
        password: await hash(user.password),
      }))
    );

    // If using UUIDs, replace with a loop
    await prisma.user.createMany({ data: users });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
