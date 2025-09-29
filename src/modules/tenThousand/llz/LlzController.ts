import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llzs")
export default class LlzController {
  @operation({
    summary: "Get Llzs",
  })
  @get()
  static getLlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llz",
  })
  @post("{id}")
  static createLlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
