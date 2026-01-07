import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxg")
export default class FxgController {
  @operation({
    summary: "Get Fxg",
  })
  @get()
  static getFxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxg",
  })
  @post("{id}")
  static createFxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
