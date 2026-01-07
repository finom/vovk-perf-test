import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkr")
export default class BkrController {
  @operation({
    summary: "Get Bkr",
  })
  @get()
  static getBkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkr",
  })
  @post("{id}")
  static createBkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
