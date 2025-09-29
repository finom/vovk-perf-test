import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwus")
export default class GwuController {
  @operation({
    summary: "Get Gwus",
  })
  @get()
  static getGwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwu",
  })
  @post("{id}")
  static createGwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
