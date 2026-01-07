import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxf")
export default class FxfController {
  @operation({
    summary: "Get Fxf",
  })
  @get()
  static getFxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxf",
  })
  @post("{id}")
  static createFxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
