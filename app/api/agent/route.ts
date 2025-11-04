import { agentReply, type AgentMessage } from "@/lib/agent";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    message: string;
    history?: AgentMessage[];
  };

  const history = payload.history || [];
  const reply = agentReply(payload.message, { conversation: history });

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}
