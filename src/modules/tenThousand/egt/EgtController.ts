import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egts")
export default class EgtController {
  @operation({
    summary: "Get Egts",
  })
  @get()
  static getEgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egt",
  })
  @post("{id}")
  static createEgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
