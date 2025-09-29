import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngbs")
export default class NgbController {
  @operation({
    summary: "Get Ngbs",
  })
  @get()
  static getNgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngb",
  })
  @post("{id}")
  static createNgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
