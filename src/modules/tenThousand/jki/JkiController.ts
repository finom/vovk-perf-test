import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkis")
export default class JkiController {
  @operation({
    summary: "Get Jkis",
  })
  @get()
  static getJkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jki",
  })
  @post("{id}")
  static createJki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
