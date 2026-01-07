import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bot")
export default class BotController {
  @operation({
    summary: "Get Bot",
  })
  @get()
  static getBot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bot",
  })
  @post("{id}")
  static createBot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
