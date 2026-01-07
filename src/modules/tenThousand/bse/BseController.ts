import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bse")
export default class BseController {
  @operation({
    summary: "Get Bse",
  })
  @get()
  static getBse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bse",
  })
  @post("{id}")
  static createBse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
