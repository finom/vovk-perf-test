import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csxes")
export default class CsxController {
  @operation({
    summary: "Get Csxes",
  })
  @get()
  static getCsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csx",
  })
  @post("{id}")
  static createCsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
