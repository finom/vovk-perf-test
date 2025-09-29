import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llhs")
export default class LlhController {
  @operation({
    summary: "Get Llhs",
  })
  @get()
  static getLlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llh",
  })
  @post("{id}")
  static createLlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
