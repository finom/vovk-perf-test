import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxk")
export default class BxkController {
  @operation({
    summary: "Get Bxk",
  })
  @get()
  static getBxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxk",
  })
  @post("{id}")
  static createBxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
