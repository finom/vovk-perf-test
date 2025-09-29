import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyes")
export default class LyeController {
  @operation({
    summary: "Get Lyes",
  })
  @get()
  static getLyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lye",
  })
  @post("{id}")
  static createLye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
