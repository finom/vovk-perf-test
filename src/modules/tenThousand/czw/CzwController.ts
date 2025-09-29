import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czws")
export default class CzwController {
  @operation({
    summary: "Get Czws",
  })
  @get()
  static getCzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czw",
  })
  @post("{id}")
  static createCzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
