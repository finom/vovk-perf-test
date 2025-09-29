import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llns")
export default class LlnController {
  @operation({
    summary: "Get Llns",
  })
  @get()
  static getLlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lln",
  })
  @post("{id}")
  static createLln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
