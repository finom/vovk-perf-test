import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxb")
export default class FxbController {
  @operation({
    summary: "Get Fxb",
  })
  @get()
  static getFxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxb",
  })
  @post("{id}")
  static createFxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
