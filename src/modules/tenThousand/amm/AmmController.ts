import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amm")
export default class AmmController {
  @operation({
    summary: "Get Amm",
  })
  @get()
  static getAmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amm",
  })
  @post("{id}")
  static createAmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
