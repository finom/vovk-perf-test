import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llks")
export default class LlkController {
  @operation({
    summary: "Get Llks",
  })
  @get()
  static getLlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llk",
  })
  @post("{id}")
  static createLlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
