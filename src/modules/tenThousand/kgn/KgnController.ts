import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgns")
export default class KgnController {
  @operation({
    summary: "Get Kgns",
  })
  @get()
  static getKgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgn",
  })
  @post("{id}")
  static createKgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
