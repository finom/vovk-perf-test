import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkc")
export default class BkcController {
  @operation({
    summary: "Get Bkc",
  })
  @get()
  static getBkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkc",
  })
  @post("{id}")
  static createBkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
