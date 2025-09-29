import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcls")
export default class KclController {
  @operation({
    summary: "Get Kcls",
  })
  @get()
  static getKcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcl",
  })
  @post("{id}")
  static createKcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
