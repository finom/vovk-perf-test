import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxv")
export default class FxvController {
  @operation({
    summary: "Get Fxv",
  })
  @get()
  static getFxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxv",
  })
  @post("{id}")
  static createFxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
