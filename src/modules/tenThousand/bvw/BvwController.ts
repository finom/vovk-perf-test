import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvw")
export default class BvwController {
  @operation({
    summary: "Get Bvw",
  })
  @get()
  static getBvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvw",
  })
  @post("{id}")
  static createBvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
