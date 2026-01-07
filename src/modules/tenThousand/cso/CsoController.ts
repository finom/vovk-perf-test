import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cso")
export default class CsoController {
  @operation({
    summary: "Get Cso",
  })
  @get()
  static getCso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cso",
  })
  @post("{id}")
  static createCso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
