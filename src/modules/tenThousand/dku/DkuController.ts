import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dku")
export default class DkuController {
  @operation({
    summary: "Get Dku",
  })
  @get()
  static getDku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dku",
  })
  @post("{id}")
  static createDku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
