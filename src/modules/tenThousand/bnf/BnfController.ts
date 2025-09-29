import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnfs")
export default class BnfController {
  @operation({
    summary: "Get Bnfs",
  })
  @get()
  static getBnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnf",
  })
  @post("{id}")
  static createBnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
