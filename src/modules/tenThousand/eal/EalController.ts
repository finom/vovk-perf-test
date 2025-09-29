import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eals")
export default class EalController {
  @operation({
    summary: "Get Eals",
  })
  @get()
  static getEals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eal",
  })
  @post("{id}")
  static createEal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
