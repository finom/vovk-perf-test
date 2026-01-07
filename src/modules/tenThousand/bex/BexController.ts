import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bex")
export default class BexController {
  @operation({
    summary: "Get Bex",
  })
  @get()
  static getBex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bex",
  })
  @post("{id}")
  static createBex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
