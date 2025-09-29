import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayes")
export default class AyeController {
  @operation({
    summary: "Get Ayes",
  })
  @get()
  static getAyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aye",
  })
  @post("{id}")
  static createAye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
