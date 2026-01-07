import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxr")
export default class FxrController {
  @operation({
    summary: "Get Fxr",
  })
  @get()
  static getFxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxr",
  })
  @post("{id}")
  static createFxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
