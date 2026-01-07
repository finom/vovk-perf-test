import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irc")
export default class IrcController {
  @operation({
    summary: "Get Irc",
  })
  @get()
  static getIrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irc",
  })
  @post("{id}")
  static createIrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
