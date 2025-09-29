import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djfs")
export default class DjfController {
  @operation({
    summary: "Get Djfs",
  })
  @get()
  static getDjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djf",
  })
  @post("{id}")
  static createDjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
