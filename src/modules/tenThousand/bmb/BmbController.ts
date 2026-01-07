import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmb")
export default class BmbController {
  @operation({
    summary: "Get Bmb",
  })
  @get()
  static getBmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmb",
  })
  @post("{id}")
  static createBmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
