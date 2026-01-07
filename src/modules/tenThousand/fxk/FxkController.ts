import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxk")
export default class FxkController {
  @operation({
    summary: "Get Fxk",
  })
  @get()
  static getFxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxk",
  })
  @post("{id}")
  static createFxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
