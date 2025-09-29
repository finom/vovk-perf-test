import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llxes")
export default class LlxController {
  @operation({
    summary: "Get Llxes",
  })
  @get()
  static getLlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llx",
  })
  @post("{id}")
  static createLlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
