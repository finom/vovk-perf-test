import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkb")
export default class BkbController {
  @operation({
    summary: "Get Bkb",
  })
  @get()
  static getBkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkb",
  })
  @post("{id}")
  static createBkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
