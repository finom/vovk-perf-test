import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxl")
export default class FxlController {
  @operation({
    summary: "Get Fxl",
  })
  @get()
  static getFxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxl",
  })
  @post("{id}")
  static createFxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
