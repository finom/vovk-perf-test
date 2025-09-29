import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isos")
export default class IsoController {
  @operation({
    summary: "Get Isos",
  })
  @get()
  static getIsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iso",
  })
  @post("{id}")
  static createIso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
