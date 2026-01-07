import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bls")
export default class BlsController {
  @operation({
    summary: "Get Bls",
  })
  @get()
  static getBls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bls",
  })
  @post("{id}")
  static createBls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
