import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnis")
export default class FniController {
  @operation({
    summary: "Get Fnis",
  })
  @get()
  static getFnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fni",
  })
  @post("{id}")
  static createFni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
