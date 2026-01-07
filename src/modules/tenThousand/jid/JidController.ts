import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jid")
export default class JidController {
  @operation({
    summary: "Get Jid",
  })
  @get()
  static getJid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jid",
  })
  @post("{id}")
  static createJid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
