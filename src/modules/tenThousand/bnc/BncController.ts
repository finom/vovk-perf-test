import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bncs")
export default class BncController {
  @operation({
    summary: "Get Bncs",
  })
  @get()
  static getBncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnc",
  })
  @post("{id}")
  static createBnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
