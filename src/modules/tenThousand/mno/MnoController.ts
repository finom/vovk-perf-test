import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnos")
export default class MnoController {
  @operation({
    summary: "Get Mnos",
  })
  @get()
  static getMnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mno",
  })
  @post("{id}")
  static createMno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
