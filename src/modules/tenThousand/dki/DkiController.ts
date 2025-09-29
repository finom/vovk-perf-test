import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkis")
export default class DkiController {
  @operation({
    summary: "Get Dkis",
  })
  @get()
  static getDkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dki",
  })
  @post("{id}")
  static createDki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
