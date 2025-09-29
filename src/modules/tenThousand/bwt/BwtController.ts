import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwts")
export default class BwtController {
  @operation({
    summary: "Get Bwts",
  })
  @get()
  static getBwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwt",
  })
  @post("{id}")
  static createBwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
