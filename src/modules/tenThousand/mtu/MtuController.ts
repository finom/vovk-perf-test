import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtus")
export default class MtuController {
  @operation({
    summary: "Get Mtus",
  })
  @get()
  static getMtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtu",
  })
  @post("{id}")
  static createMtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
