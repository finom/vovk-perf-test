import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hixes")
export default class HixController {
  @operation({
    summary: "Get Hixes",
  })
  @get()
  static getHixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hix",
  })
  @post("{id}")
  static createHix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
