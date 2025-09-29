import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdns")
export default class JdnController {
  @operation({
    summary: "Get Jdns",
  })
  @get()
  static getJdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdn",
  })
  @post("{id}")
  static createJdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
