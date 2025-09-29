import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luqs")
export default class LuqController {
  @operation({
    summary: "Get Luqs",
  })
  @get()
  static getLuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luq",
  })
  @post("{id}")
  static createLuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
