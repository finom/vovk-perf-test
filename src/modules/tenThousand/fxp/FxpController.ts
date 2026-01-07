import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxp")
export default class FxpController {
  @operation({
    summary: "Get Fxp",
  })
  @get()
  static getFxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxp",
  })
  @post("{id}")
  static createFxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
