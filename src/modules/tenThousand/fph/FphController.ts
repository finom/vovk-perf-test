import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fphs")
export default class FphController {
  @operation({
    summary: "Get Fphs",
  })
  @get()
  static getFphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fph",
  })
  @post("{id}")
  static createFph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
