import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyes")
export default class DyeController {
  @operation({
    summary: "Get Dyes",
  })
  @get()
  static getDyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dye",
  })
  @post("{id}")
  static createDye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
