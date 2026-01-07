import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxe")
export default class FxeController {
  @operation({
    summary: "Get Fxe",
  })
  @get()
  static getFxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxe",
  })
  @post("{id}")
  static createFxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
