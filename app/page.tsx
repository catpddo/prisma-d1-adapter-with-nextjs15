import { getCloudflareContext } from "@opennextjs/cloudflare";
import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@/lib/prisma";

export default async function Home() {
  const ctx = await getCloudflareContext({ async: true });
  const adapter = new PrismaD1(ctx.env.DB);
  const prisma = new PrismaClient({ adapter });

  const user = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
