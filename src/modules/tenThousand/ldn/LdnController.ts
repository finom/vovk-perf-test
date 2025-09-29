import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldns")
export default class LdnController {
  @operation({
    summary: "Get Ldns",
  })
  @get()
  static getLdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldn",
  })
  @post("{id}")
  static createLdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
