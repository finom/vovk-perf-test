import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chcs")
export default class ChcController {
  @operation({
    summary: "Get Chcs",
  })
  @get()
  static getChcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chc",
  })
  @post("{id}")
  static createChc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
