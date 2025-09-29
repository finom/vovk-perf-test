import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sses")
export default class SsController {
  @operation({
    summary: "Get Sses",
  })
  @get()
  static getSses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ss",
  })
  @post("{id}")
  static createSs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
