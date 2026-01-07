import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmv")
export default class MmvController {
  @operation({
    summary: "Get Mmv",
  })
  @get()
  static getMmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmv",
  })
  @post("{id}")
  static createMmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
