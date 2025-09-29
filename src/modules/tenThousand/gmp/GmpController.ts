import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmps")
export default class GmpController {
  @operation({
    summary: "Get Gmps",
  })
  @get()
  static getGmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmp",
  })
  @post("{id}")
  static createGmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
