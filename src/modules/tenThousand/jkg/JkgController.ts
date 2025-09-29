import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkgs")
export default class JkgController {
  @operation({
    summary: "Get Jkgs",
  })
  @get()
  static getJkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkg",
  })
  @post("{id}")
  static createJkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
