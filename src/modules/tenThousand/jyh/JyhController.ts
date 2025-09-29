import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyhs")
export default class JyhController {
  @operation({
    summary: "Get Jyhs",
  })
  @get()
  static getJyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyh",
  })
  @post("{id}")
  static createJyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
