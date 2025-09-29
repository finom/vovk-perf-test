import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heds")
export default class HedController {
  @operation({
    summary: "Get Heds",
  })
  @get()
  static getHeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hed",
  })
  @post("{id}")
  static createHed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
