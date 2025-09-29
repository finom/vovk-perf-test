import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agis")
export default class AgiController {
  @operation({
    summary: "Get Agis",
  })
  @get()
  static getAgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agi",
  })
  @post("{id}")
  static createAgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
