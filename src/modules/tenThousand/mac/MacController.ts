import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("macs")
export default class MacController {
  @operation({
    summary: "Get Macs",
  })
  @get()
  static getMacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mac",
  })
  @post("{id}")
  static createMac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
