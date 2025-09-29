import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlls")
export default class JllController {
  @operation({
    summary: "Get Jlls",
  })
  @get()
  static getJlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jll",
  })
  @post("{id}")
  static createJll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
