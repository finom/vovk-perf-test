import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgb")
export default class MgbController {
  @operation({
    summary: "Get Mgb",
  })
  @get()
  static getMgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgb",
  })
  @post("{id}")
  static createMgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
