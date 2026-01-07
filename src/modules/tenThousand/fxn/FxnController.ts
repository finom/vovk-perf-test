import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxn")
export default class FxnController {
  @operation({
    summary: "Get Fxn",
  })
  @get()
  static getFxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxn",
  })
  @post("{id}")
  static createFxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
