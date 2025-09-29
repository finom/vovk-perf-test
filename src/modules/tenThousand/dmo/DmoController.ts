import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmos")
export default class DmoController {
  @operation({
    summary: "Get Dmos",
  })
  @get()
  static getDmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmo",
  })
  @post("{id}")
  static createDmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
