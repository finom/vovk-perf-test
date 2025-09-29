import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kges")
export default class KgeController {
  @operation({
    summary: "Get Kges",
  })
  @get()
  static getKges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kge",
  })
  @post("{id}")
  static createKge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
