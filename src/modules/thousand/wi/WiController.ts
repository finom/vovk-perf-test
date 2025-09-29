import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wis")
export default class WiController {
  @operation({
    summary: "Get Wis",
  })
  @get()
  static getWis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wi",
  })
  @post("{id}")
  static createWi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
