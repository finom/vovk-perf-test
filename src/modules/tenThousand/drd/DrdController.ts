import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drds")
export default class DrdController {
  @operation({
    summary: "Get Drds",
  })
  @get()
  static getDrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drd",
  })
  @post("{id}")
  static createDrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
