import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwk")
export default class BwkController {
  @operation({
    summary: "Get Bwk",
  })
  @get()
  static getBwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwk",
  })
  @post("{id}")
  static createBwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
