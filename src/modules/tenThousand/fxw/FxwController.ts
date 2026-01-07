import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxw")
export default class FxwController {
  @operation({
    summary: "Get Fxw",
  })
  @get()
  static getFxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxw",
  })
  @post("{id}")
  static createFxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
