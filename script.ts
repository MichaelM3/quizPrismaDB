import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
           email: "dagreekarican@aim.com",
           username: "GreekaRicaN",
           age: 28,
           quizCount: 4,
           averageScore: .75
        }
    })
    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
// end of promises
