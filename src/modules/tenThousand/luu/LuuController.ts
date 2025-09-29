import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luus")
export default class LuuController {
  @operation({
    summary: "Get Luus",
  })
  @get()
  static getLuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luu",
  })
  @post("{id}")
  static createLuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
