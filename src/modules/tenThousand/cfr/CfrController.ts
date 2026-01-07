import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfr")
export default class CfrController {
  @operation({
    summary: "Get Cfr",
  })
  @get()
  static getCfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfr",
  })
  @post("{id}")
  static createCfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
