import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmg")
export default class BmgController {
  @operation({
    summary: "Get Bmg",
  })
  @get()
  static getBmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmg",
  })
  @post("{id}")
  static createBmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
