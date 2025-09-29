import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgbs")
export default class JgbController {
  @operation({
    summary: "Get Jgbs",
  })
  @get()
  static getJgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgb",
  })
  @post("{id}")
  static createJgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
