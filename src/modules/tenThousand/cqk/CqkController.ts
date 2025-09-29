import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqks")
export default class CqkController {
  @operation({
    summary: "Get Cqks",
  })
  @get()
  static getCqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqk",
  })
  @post("{id}")
  static createCqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
