import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkw")
export default class BkwController {
  @operation({
    summary: "Get Bkw",
  })
  @get()
  static getBkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkw",
  })
  @post("{id}")
  static createBkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
