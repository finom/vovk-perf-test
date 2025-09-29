import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtes")
export default class DteController {
  @operation({
    summary: "Get Dtes",
  })
  @get()
  static getDtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dte",
  })
  @post("{id}")
  static createDte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
