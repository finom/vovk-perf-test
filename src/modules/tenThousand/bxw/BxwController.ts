import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxw")
export default class BxwController {
  @operation({
    summary: "Get Bxw",
  })
  @get()
  static getBxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxw",
  })
  @post("{id}")
  static createBxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
