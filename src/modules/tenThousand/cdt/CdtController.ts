import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdt")
export default class CdtController {
  @operation({
    summary: "Get Cdt",
  })
  @get()
  static getCdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdt",
  })
  @post("{id}")
  static createCdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
