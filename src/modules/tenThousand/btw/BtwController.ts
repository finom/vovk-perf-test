import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btw")
export default class BtwController {
  @operation({
    summary: "Get Btw",
  })
  @get()
  static getBtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btw",
  })
  @post("{id}")
  static createBtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
