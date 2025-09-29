import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdms")
export default class GdmController {
  @operation({
    summary: "Get Gdms",
  })
  @get()
  static getGdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdm",
  })
  @post("{id}")
  static createGdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
