import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwl")
export default class BwlController {
  @operation({
    summary: "Get Bwl",
  })
  @get()
  static getBwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwl",
  })
  @post("{id}")
  static createBwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
