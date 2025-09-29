import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldls")
export default class LdlController {
  @operation({
    summary: "Get Ldls",
  })
  @get()
  static getLdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldl",
  })
  @post("{id}")
  static createLdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
