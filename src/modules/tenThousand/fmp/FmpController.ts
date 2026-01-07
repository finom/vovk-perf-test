import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmp")
export default class FmpController {
  @operation({
    summary: "Get Fmp",
  })
  @get()
  static getFmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmp",
  })
  @post("{id}")
  static createFmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
