import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffls")
export default class FflController {
  @operation({
    summary: "Get Ffls",
  })
  @get()
  static getFfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffl",
  })
  @post("{id}")
  static createFfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
