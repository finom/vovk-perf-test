import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djns")
export default class DjnController {
  @operation({
    summary: "Get Djns",
  })
  @get()
  static getDjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djn",
  })
  @post("{id}")
  static createDjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
