import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ais")
export default class AisController {
  @operation({
    summary: "Get Ais",
  })
  @get()
  static getAis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ais",
  })
  @post("{id}")
  static createAis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
