import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmg")
export default class LmgController {
  @operation({
    summary: "Get Lmg",
  })
  @get()
  static getLmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmg",
  })
  @post("{id}")
  static createLmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
