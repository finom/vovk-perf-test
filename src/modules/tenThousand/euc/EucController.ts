import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eucs")
export default class EucController {
  @operation({
    summary: "Get Eucs",
  })
  @get()
  static getEucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euc",
  })
  @post("{id}")
  static createEuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
