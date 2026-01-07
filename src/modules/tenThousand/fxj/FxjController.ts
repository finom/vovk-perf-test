import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxj")
export default class FxjController {
  @operation({
    summary: "Get Fxj",
  })
  @get()
  static getFxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxj",
  })
  @post("{id}")
  static createFxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
