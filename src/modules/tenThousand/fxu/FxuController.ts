import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxu")
export default class FxuController {
  @operation({
    summary: "Get Fxu",
  })
  @get()
  static getFxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxu",
  })
  @post("{id}")
  static createFxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
