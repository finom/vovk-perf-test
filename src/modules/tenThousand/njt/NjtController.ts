import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njts")
export default class NjtController {
  @operation({
    summary: "Get Njts",
  })
  @get()
  static getNjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njt",
  })
  @post("{id}")
  static createNjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
