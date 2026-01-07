import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcb")
export default class BcbController {
  @operation({
    summary: "Get Bcb",
  })
  @get()
  static getBcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcb",
  })
  @post("{id}")
  static createBcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
