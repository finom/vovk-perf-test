import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyrs")
export default class CyrController {
  @operation({
    summary: "Get Cyrs",
  })
  @get()
  static getCyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyr",
  })
  @post("{id}")
  static createCyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
