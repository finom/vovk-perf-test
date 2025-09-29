import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgks")
export default class FgkController {
  @operation({
    summary: "Get Fgks",
  })
  @get()
  static getFgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgk",
  })
  @post("{id}")
  static createFgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
