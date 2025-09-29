import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgts")
export default class KgtController {
  @operation({
    summary: "Get Kgts",
  })
  @get()
  static getKgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgt",
  })
  @post("{id}")
  static createKgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
