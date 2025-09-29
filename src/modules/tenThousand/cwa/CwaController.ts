import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwas")
export default class CwaController {
  @operation({
    summary: "Get Cwas",
  })
  @get()
  static getCwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwa",
  })
  @post("{id}")
  static createCwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
