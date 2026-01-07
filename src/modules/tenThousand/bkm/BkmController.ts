import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkm")
export default class BkmController {
  @operation({
    summary: "Get Bkm",
  })
  @get()
  static getBkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkm",
  })
  @post("{id}")
  static createBkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
