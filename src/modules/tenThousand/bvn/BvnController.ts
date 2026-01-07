import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvn")
export default class BvnController {
  @operation({
    summary: "Get Bvn",
  })
  @get()
  static getBvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvn",
  })
  @post("{id}")
  static createBvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
