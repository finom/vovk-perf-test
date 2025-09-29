import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xes")
export default class XController {
  @operation({
    summary: "Get XES",
  })
  @get()
  static getXES = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create X",
  })
  @post("{id}")
  static createX = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
