import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcns")
export default class KcnController {
  @operation({
    summary: "Get Kcns",
  })
  @get()
  static getKcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcn",
  })
  @post("{id}")
  static createKcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
