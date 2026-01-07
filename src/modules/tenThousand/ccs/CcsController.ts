import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccs")
export default class CcsController {
  @operation({
    summary: "Get Ccs",
  })
  @get()
  static getCcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccs",
  })
  @post("{id}")
  static createCcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
