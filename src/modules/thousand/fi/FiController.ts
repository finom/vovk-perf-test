import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fis")
export default class FiController {
  @operation({
    summary: "Get Fis",
  })
  @get()
  static getFis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fi",
  })
  @post("{id}")
  static createFi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
