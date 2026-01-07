import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bce")
export default class BceController {
  @operation({
    summary: "Get Bce",
  })
  @get()
  static getBce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bce",
  })
  @post("{id}")
  static createBce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
