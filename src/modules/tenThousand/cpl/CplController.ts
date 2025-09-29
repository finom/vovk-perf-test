import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpls")
export default class CplController {
  @operation({
    summary: "Get Cpls",
  })
  @get()
  static getCpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpl",
  })
  @post("{id}")
  static createCpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
