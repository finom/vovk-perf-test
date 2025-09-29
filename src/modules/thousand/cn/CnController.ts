import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cns")
export default class CnController {
  @operation({
    summary: "Get Cns",
  })
  @get()
  static getCns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cn",
  })
  @post("{id}")
  static createCn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
