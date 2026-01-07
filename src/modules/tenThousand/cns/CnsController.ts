import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cns")
export default class CnsController {
  @operation({
    summary: "Get Cns",
  })
  @get()
  static getCns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cns",
  })
  @post("{id}")
  static createCns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
