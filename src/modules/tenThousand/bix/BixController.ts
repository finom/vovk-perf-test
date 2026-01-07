import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bix")
export default class BixController {
  @operation({
    summary: "Get Bix",
  })
  @get()
  static getBix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bix",
  })
  @post("{id}")
  static createBix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
