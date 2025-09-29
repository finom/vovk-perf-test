import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnis")
export default class HniController {
  @operation({
    summary: "Get Hnis",
  })
  @get()
  static getHnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hni",
  })
  @post("{id}")
  static createHni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
