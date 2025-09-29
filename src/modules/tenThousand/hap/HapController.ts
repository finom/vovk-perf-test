import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haps")
export default class HapController {
  @operation({
    summary: "Get Haps",
  })
  @get()
  static getHaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hap",
  })
  @post("{id}")
  static createHap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
