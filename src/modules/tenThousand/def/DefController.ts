import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("defs")
export default class DefController {
  @operation({
    summary: "Get Defs",
  })
  @get()
  static getDefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Def",
  })
  @post("{id}")
  static createDef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
