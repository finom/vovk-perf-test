import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbms")
export default class GbmController {
  @operation({
    summary: "Get Gbms",
  })
  @get()
  static getGbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbm",
  })
  @post("{id}")
  static createGbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
