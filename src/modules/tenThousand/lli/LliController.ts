import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llis")
export default class LliController {
  @operation({
    summary: "Get Llis",
  })
  @get()
  static getLlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lli",
  })
  @post("{id}")
  static createLli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
