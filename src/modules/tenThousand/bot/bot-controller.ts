import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bot")
export default class BotController {
  @operation({
    summary: "Get Bot",
  })
  @get()
  static getBot = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bot",
  })
  @post("{id}")
  static createBot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
