import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epls")
export default class EplController {
  @operation({
    summary: "Get Epls",
  })
  @get()
  static getEpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epl",
  })
  @post("{id}")
  static createEpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
