import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldks")
export default class LdkController {
  @operation({
    summary: "Get Ldks",
  })
  @get()
  static getLdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldk",
  })
  @post("{id}")
  static createLdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
