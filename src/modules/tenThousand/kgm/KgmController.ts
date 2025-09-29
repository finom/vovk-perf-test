import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgms")
export default class KgmController {
  @operation({
    summary: "Get Kgms",
  })
  @get()
  static getKgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgm",
  })
  @post("{id}")
  static createKgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
