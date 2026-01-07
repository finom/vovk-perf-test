import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxm")
export default class FxmController {
  @operation({
    summary: "Get Fxm",
  })
  @get()
  static getFxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxm",
  })
  @post("{id}")
  static createFxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
