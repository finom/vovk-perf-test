import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcw")
export default class BcwController {
  @operation({
    summary: "Get Bcw",
  })
  @get()
  static getBcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcw",
  })
  @post("{id}")
  static createBcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
