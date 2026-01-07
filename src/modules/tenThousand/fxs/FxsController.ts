import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxs")
export default class FxsController {
  @operation({
    summary: "Get Fxs",
  })
  @get()
  static getFxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxs",
  })
  @post("{id}")
  static createFxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
