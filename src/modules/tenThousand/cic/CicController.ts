import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cics")
export default class CicController {
  @operation({
    summary: "Get Cics",
  })
  @get()
  static getCics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cic",
  })
  @post("{id}")
  static createCic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
