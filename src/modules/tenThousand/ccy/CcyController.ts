import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccy")
export default class CcyController {
  @operation({
    summary: "Get Ccy",
  })
  @get()
  static getCcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccy",
  })
  @post("{id}")
  static createCcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
