import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdns")
export default class HdnController {
  @operation({
    summary: "Get Hdns",
  })
  @get()
  static getHdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdn",
  })
  @post("{id}")
  static createHdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
