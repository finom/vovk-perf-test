import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnvs")
export default class BnvController {
  @operation({
    summary: "Get Bnvs",
  })
  @get()
  static getBnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnv",
  })
  @post("{id}")
  static createBnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
