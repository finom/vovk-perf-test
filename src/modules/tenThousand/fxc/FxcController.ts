import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxc")
export default class FxcController {
  @operation({
    summary: "Get Fxc",
  })
  @get()
  static getFxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxc",
  })
  @post("{id}")
  static createFxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
