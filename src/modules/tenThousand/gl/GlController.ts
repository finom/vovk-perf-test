import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gls")
export default class GlController {
  @operation({
    summary: "Get Gls",
  })
  @get()
  static getGls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gl",
  })
  @post("{id}")
  static createGl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
