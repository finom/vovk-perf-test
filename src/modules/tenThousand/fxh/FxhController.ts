import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxh")
export default class FxhController {
  @operation({
    summary: "Get Fxh",
  })
  @get()
  static getFxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxh",
  })
  @post("{id}")
  static createFxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
