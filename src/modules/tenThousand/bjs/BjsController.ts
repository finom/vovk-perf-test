import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjs")
export default class BjsController {
  @operation({
    summary: "Get Bjs",
  })
  @get()
  static getBjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjs",
  })
  @post("{id}")
  static createBjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
