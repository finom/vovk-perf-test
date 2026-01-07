import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bk")
export default class BkController {
  @operation({
    summary: "Get Bk",
  })
  @get()
  static getBk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bk",
  })
  @post("{id}")
  static createBk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
