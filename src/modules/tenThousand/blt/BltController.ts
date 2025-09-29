import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blts")
export default class BltController {
  @operation({
    summary: "Get Blts",
  })
  @get()
  static getBlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blt",
  })
  @post("{id}")
  static createBlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
