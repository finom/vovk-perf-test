import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxv")
export default class BxvController {
  @operation({
    summary: "Get Bxv",
  })
  @get()
  static getBxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxv",
  })
  @post("{id}")
  static createBxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
