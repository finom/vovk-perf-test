import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcs")
export default class JcsController {
  @operation({
    summary: "Get Jcs",
  })
  @get()
  static getJcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcs",
  })
  @post("{id}")
  static createJcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
