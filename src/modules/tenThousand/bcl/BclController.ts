import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcl")
export default class BclController {
  @operation({
    summary: "Get Bcl",
  })
  @get()
  static getBcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcl",
  })
  @post("{id}")
  static createBcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
