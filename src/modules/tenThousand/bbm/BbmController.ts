import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbm")
export default class BbmController {
  @operation({
    summary: "Get Bbm",
  })
  @get()
  static getBbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbm",
  })
  @post("{id}")
  static createBbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
