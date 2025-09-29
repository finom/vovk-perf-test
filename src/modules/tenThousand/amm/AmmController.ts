import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amms")
export default class AmmController {
  @operation({
    summary: "Get Amms",
  })
  @get()
  static getAmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amm",
  })
  @post("{id}")
  static createAmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
