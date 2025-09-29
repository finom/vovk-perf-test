import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilns")
export default class IlnController {
  @operation({
    summary: "Get Ilns",
  })
  @get()
  static getIlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iln",
  })
  @post("{id}")
  static createIln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
