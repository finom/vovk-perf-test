import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejas")
export default class EjaController {
  @operation({
    summary: "Get Ejas",
  })
  @get()
  static getEjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eja",
  })
  @post("{id}")
  static createEja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
