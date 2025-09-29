import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksls")
export default class KslController {
  @operation({
    summary: "Get Ksls",
  })
  @get()
  static getKsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksl",
  })
  @post("{id}")
  static createKsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
