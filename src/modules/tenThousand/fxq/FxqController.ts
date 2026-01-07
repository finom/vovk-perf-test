import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxq")
export default class FxqController {
  @operation({
    summary: "Get Fxq",
  })
  @get()
  static getFxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxq",
  })
  @post("{id}")
  static createFxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
