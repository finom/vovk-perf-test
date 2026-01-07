import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkh")
export default class BkhController {
  @operation({
    summary: "Get Bkh",
  })
  @get()
  static getBkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkh",
  })
  @post("{id}")
  static createBkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
