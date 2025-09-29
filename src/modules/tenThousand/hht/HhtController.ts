import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhts")
export default class HhtController {
  @operation({
    summary: "Get Hhts",
  })
  @get()
  static getHhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hht",
  })
  @post("{id}")
  static createHht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
