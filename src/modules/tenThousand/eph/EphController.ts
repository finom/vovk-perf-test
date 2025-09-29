import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ephs")
export default class EphController {
  @operation({
    summary: "Get Ephs",
  })
  @get()
  static getEphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eph",
  })
  @post("{id}")
  static createEph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
