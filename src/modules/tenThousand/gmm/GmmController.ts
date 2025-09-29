import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmms")
export default class GmmController {
  @operation({
    summary: "Get Gmms",
  })
  @get()
  static getGmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmm",
  })
  @post("{id}")
  static createGmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
