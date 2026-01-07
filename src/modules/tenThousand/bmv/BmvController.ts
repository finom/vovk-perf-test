import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmv")
export default class BmvController {
  @operation({
    summary: "Get Bmv",
  })
  @get()
  static getBmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmv",
  })
  @post("{id}")
  static createBmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
