import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdns")
export default class MdnController {
  @operation({
    summary: "Get Mdns",
  })
  @get()
  static getMdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdn",
  })
  @post("{id}")
  static createMdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
