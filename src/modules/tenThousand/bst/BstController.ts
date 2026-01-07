import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bst")
export default class BstController {
  @operation({
    summary: "Get Bst",
  })
  @get()
  static getBst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bst",
  })
  @post("{id}")
  static createBst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
