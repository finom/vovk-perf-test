import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqis")
export default class CqiController {
  @operation({
    summary: "Get Cqis",
  })
  @get()
  static getCqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqi",
  })
  @post("{id}")
  static createCqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
