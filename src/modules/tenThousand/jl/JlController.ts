import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jls")
export default class JlController {
  @operation({
    summary: "Get Jls",
  })
  @get()
  static getJls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jl",
  })
  @post("{id}")
  static createJl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
