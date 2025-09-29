import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhrs")
export default class NhrController {
  @operation({
    summary: "Get Nhrs",
  })
  @get()
  static getNhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhr",
  })
  @post("{id}")
  static createNhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
