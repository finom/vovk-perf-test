import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxy")
export default class BxyController {
  @operation({
    summary: "Get Bxy",
  })
  @get()
  static getBxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxy",
  })
  @post("{id}")
  static createBxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
