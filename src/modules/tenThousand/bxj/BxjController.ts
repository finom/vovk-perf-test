import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxj")
export default class BxjController {
  @operation({
    summary: "Get Bxj",
  })
  @get()
  static getBxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxj",
  })
  @post("{id}")
  static createBxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
