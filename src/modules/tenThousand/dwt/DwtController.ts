import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwts")
export default class DwtController {
  @operation({
    summary: "Get Dwts",
  })
  @get()
  static getDwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwt",
  })
  @post("{id}")
  static createDwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
