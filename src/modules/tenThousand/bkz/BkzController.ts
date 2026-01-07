import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkz")
export default class BkzController {
  @operation({
    summary: "Get Bkz",
  })
  @get()
  static getBkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkz",
  })
  @post("{id}")
  static createBkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
