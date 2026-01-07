import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdr")
export default class FdrController {
  @operation({
    summary: "Get Fdr",
  })
  @get()
  static getFdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdr",
  })
  @post("{id}")
  static createFdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
