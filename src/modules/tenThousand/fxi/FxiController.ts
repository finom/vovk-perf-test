import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxi")
export default class FxiController {
  @operation({
    summary: "Get Fxi",
  })
  @get()
  static getFxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxi",
  })
  @post("{id}")
  static createFxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
