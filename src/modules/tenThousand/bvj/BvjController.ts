import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvj")
export default class BvjController {
  @operation({
    summary: "Get Bvj",
  })
  @get()
  static getBvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvj",
  })
  @post("{id}")
  static createBvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
