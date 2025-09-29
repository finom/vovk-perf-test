import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwos")
export default class FwoController {
  @operation({
    summary: "Get Fwos",
  })
  @get()
  static getFwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwo",
  })
  @post("{id}")
  static createFwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
