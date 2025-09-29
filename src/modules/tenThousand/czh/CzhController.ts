import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czhs")
export default class CzhController {
  @operation({
    summary: "Get Czhs",
  })
  @get()
  static getCzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czh",
  })
  @post("{id}")
  static createCzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
