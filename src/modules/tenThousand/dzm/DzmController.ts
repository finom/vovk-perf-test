import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzms")
export default class DzmController {
  @operation({
    summary: "Get Dzms",
  })
  @get()
  static getDzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzm",
  })
  @post("{id}")
  static createDzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
