import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqqs")
export default class LqqController {
  @operation({
    summary: "Get Lqqs",
  })
  @get()
  static getLqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqq",
  })
  @post("{id}")
  static createLqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
