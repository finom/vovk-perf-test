import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boj")
export default class BojController {
  @operation({
    summary: "Get Boj",
  })
  @get()
  static getBoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boj",
  })
  @post("{id}")
  static createBoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
