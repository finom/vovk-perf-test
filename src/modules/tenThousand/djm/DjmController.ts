import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djms")
export default class DjmController {
  @operation({
    summary: "Get Djms",
  })
  @get()
  static getDjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djm",
  })
  @post("{id}")
  static createDjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
