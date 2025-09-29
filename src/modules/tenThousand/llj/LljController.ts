import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lljs")
export default class LljController {
  @operation({
    summary: "Get Lljs",
  })
  @get()
  static getLljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llj",
  })
  @post("{id}")
  static createLlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
