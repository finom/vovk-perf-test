import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvls")
export default class HvlController {
  @operation({
    summary: "Get Hvls",
  })
  @get()
  static getHvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvl",
  })
  @post("{id}")
  static createHvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
