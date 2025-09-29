import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvas")
export default class BvaController {
  @operation({
    summary: "Get Bvas",
  })
  @get()
  static getBvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bva",
  })
  @post("{id}")
  static createBva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
