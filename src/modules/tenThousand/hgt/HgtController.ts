import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgts")
export default class HgtController {
  @operation({
    summary: "Get Hgts",
  })
  @get()
  static getHgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgt",
  })
  @post("{id}")
  static createHgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
