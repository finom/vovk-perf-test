import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxb")
export default class BxbController {
  @operation({
    summary: "Get Bxb",
  })
  @get()
  static getBxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxb",
  })
  @post("{id}")
  static createBxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
