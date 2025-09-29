import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arps")
export default class ArpController {
  @operation({
    summary: "Get Arps",
  })
  @get()
  static getArps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arp",
  })
  @post("{id}")
  static createArp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
