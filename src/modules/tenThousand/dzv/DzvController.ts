import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzvs")
export default class DzvController {
  @operation({
    summary: "Get Dzvs",
  })
  @get()
  static getDzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzv",
  })
  @post("{id}")
  static createDzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
