import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghus")
export default class GhuController {
  @operation({
    summary: "Get Ghus",
  })
  @get()
  static getGhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghu",
  })
  @post("{id}")
  static createGhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
