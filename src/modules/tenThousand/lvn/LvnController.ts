import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvn")
export default class LvnController {
  @operation({
    summary: "Get Lvn",
  })
  @get()
  static getLvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvn",
  })
  @post("{id}")
  static createLvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
