import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tls")
export default class TlController {
  @operation({
    summary: "Get Tls",
  })
  @get()
  static getTls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tl",
  })
  @post("{id}")
  static createTl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
