import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxi")
export default class BxiController {
  @operation({
    summary: "Get Bxi",
  })
  @get()
  static getBxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxi",
  })
  @post("{id}")
  static createBxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
