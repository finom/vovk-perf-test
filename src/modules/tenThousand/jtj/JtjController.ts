import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtjs")
export default class JtjController {
  @operation({
    summary: "Get Jtjs",
  })
  @get()
  static getJtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtj",
  })
  @post("{id}")
  static createJtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
