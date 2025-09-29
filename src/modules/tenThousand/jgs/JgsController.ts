import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgs")
export default class JgsController {
  @operation({
    summary: "Get Jgs",
  })
  @get()
  static getJgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgs",
  })
  @post("{id}")
  static createJgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
