import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlns")
export default class DlnController {
  @operation({
    summary: "Get Dlns",
  })
  @get()
  static getDlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dln",
  })
  @post("{id}")
  static createDln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
