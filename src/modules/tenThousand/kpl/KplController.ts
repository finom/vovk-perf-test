import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpls")
export default class KplController {
  @operation({
    summary: "Get Kpls",
  })
  @get()
  static getKpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpl",
  })
  @post("{id}")
  static createKpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
