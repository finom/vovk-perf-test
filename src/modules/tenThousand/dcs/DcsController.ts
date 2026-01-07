import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcs")
export default class DcsController {
  @operation({
    summary: "Get Dcs",
  })
  @get()
  static getDcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcs",
  })
  @post("{id}")
  static createDcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
