import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ban")
export default class BanController {
  @operation({
    summary: "Get Ban",
  })
  @get()
  static getBan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ban",
  })
  @post("{id}")
  static createBan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
