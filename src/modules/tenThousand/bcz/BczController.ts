import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcz")
export default class BczController {
  @operation({
    summary: "Get Bcz",
  })
  @get()
  static getBcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcz",
  })
  @post("{id}")
  static createBcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
