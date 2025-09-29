import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djps")
export default class DjpController {
  @operation({
    summary: "Get Djps",
  })
  @get()
  static getDjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djp",
  })
  @post("{id}")
  static createDjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
