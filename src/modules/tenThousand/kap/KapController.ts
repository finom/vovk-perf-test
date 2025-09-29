import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaps")
export default class KapController {
  @operation({
    summary: "Get Kaps",
  })
  @get()
  static getKaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kap",
  })
  @post("{id}")
  static createKap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
