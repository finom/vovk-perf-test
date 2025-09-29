import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgts")
export default class FgtController {
  @operation({
    summary: "Get Fgts",
  })
  @get()
  static getFgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgt",
  })
  @post("{id}")
  static createFgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
