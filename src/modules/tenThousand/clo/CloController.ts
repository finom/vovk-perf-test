import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clos")
export default class CloController {
  @operation({
    summary: "Get Clos",
  })
  @get()
  static getClos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clo",
  })
  @post("{id}")
  static createClo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
