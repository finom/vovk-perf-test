import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byw")
export default class BywController {
  @operation({
    summary: "Get Byw",
  })
  @get()
  static getByw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byw",
  })
  @post("{id}")
  static createByw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
