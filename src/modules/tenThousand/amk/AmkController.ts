import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amks")
export default class AmkController {
  @operation({
    summary: "Get Amks",
  })
  @get()
  static getAmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amk",
  })
  @post("{id}")
  static createAmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
