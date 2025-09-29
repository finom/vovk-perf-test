import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sos")
export default class SoController {
  @operation({
    summary: "Get Sos",
  })
  @get()
  static getSos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create So",
  })
  @post("{id}")
  static createSo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
