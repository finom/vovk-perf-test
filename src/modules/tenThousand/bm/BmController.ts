import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bm")
export default class BmController {
  @operation({
    summary: "Get Bm",
  })
  @get()
  static getBm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bm",
  })
  @post("{id}")
  static createBm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
