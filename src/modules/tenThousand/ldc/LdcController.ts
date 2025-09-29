import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldcs")
export default class LdcController {
  @operation({
    summary: "Get Ldcs",
  })
  @get()
  static getLdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldc",
  })
  @post("{id}")
  static createLdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
