import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxh")
export default class BxhController {
  @operation({
    summary: "Get Bxh",
  })
  @get()
  static getBxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxh",
  })
  @post("{id}")
  static createBxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
