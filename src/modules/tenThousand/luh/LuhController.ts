import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luhs")
export default class LuhController {
  @operation({
    summary: "Get Luhs",
  })
  @get()
  static getLuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luh",
  })
  @post("{id}")
  static createLuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
