import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krgs")
export default class KrgController {
  @operation({
    summary: "Get Krgs",
  })
  @get()
  static getKrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krg",
  })
  @post("{id}")
  static createKrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
