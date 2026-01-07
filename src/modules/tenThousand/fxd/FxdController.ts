import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxd")
export default class FxdController {
  @operation({
    summary: "Get Fxd",
  })
  @get()
  static getFxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxd",
  })
  @post("{id}")
  static createFxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
