import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwo")
export default class BwoController {
  @operation({
    summary: "Get Bwo",
  })
  @get()
  static getBwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwo",
  })
  @post("{id}")
  static createBwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
