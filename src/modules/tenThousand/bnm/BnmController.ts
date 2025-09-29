import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnms")
export default class BnmController {
  @operation({
    summary: "Get Bnms",
  })
  @get()
  static getBnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnm",
  })
  @post("{id}")
  static createBnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
