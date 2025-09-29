import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wbs")
export default class WbController {
  @operation({
    summary: "Get Wbs",
  })
  @get()
  static getWbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wb",
  })
  @post("{id}")
  static createWb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
