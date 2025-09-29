import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmos")
export default class CmoController {
  @operation({
    summary: "Get Cmos",
  })
  @get()
  static getCmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmo",
  })
  @post("{id}")
  static createCmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
