import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glls")
export default class GllController {
  @operation({
    summary: "Get Glls",
  })
  @get()
  static getGlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gll",
  })
  @post("{id}")
  static createGll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
