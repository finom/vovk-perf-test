import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgms")
export default class FgmController {
  @operation({
    summary: "Get Fgms",
  })
  @get()
  static getFgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgm",
  })
  @post("{id}")
  static createFgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
