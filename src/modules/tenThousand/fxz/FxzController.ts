import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxz")
export default class FxzController {
  @operation({
    summary: "Get Fxz",
  })
  @get()
  static getFxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxz",
  })
  @post("{id}")
  static createFxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
