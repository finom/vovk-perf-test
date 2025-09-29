import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlus")
export default class HluController {
  @operation({
    summary: "Get Hlus",
  })
  @get()
  static getHlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlu",
  })
  @post("{id}")
  static createHlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
