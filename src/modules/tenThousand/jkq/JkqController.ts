import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkqs")
export default class JkqController {
  @operation({
    summary: "Get Jkqs",
  })
  @get()
  static getJkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkq",
  })
  @post("{id}")
  static createJkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
