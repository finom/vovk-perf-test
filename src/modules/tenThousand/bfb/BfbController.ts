import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfb")
export default class BfbController {
  @operation({
    summary: "Get Bfb",
  })
  @get()
  static getBfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfb",
  })
  @post("{id}")
  static createBfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
