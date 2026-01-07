import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvt")
export default class FvtController {
  @operation({
    summary: "Get Fvt",
  })
  @get()
  static getFvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvt",
  })
  @post("{id}")
  static createFvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
