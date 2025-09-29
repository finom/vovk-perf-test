import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atns")
export default class AtnController {
  @operation({
    summary: "Get Atns",
  })
  @get()
  static getAtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atn",
  })
  @post("{id}")
  static createAtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
