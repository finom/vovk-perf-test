import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyes")
export default class FyeController {
  @operation({
    summary: "Get Fyes",
  })
  @get()
  static getFyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fye",
  })
  @post("{id}")
  static createFye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
