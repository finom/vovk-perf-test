import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmos")
export default class BmoController {
  @operation({
    summary: "Get Bmos",
  })
  @get()
  static getBmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmo",
  })
  @post("{id}")
  static createBmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
