import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmg")
export default class MmgController {
  @operation({
    summary: "Get Mmg",
  })
  @get()
  static getMmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmg",
  })
  @post("{id}")
  static createMmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
