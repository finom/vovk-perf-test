import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emhs")
export default class EmhController {
  @operation({
    summary: "Get Emhs",
  })
  @get()
  static getEmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emh",
  })
  @post("{id}")
  static createEmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
