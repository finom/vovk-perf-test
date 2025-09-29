import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnies")
export default class BnyController {
  @operation({
    summary: "Get Bnies",
  })
  @get()
  static getBnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bny",
  })
  @post("{id}")
  static createBny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
