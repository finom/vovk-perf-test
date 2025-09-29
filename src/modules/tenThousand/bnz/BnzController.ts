import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnzs")
export default class BnzController {
  @operation({
    summary: "Get Bnzs",
  })
  @get()
  static getBnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnz",
  })
  @post("{id}")
  static createBnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
