import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkd")
export default class BkdController {
  @operation({
    summary: "Get Bkd",
  })
  @get()
  static getBkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkd",
  })
  @post("{id}")
  static createBkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
