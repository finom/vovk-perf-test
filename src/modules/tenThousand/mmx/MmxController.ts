import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmxes")
export default class MmxController {
  @operation({
    summary: "Get Mmxes",
  })
  @get()
  static getMmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmx",
  })
  @post("{id}")
  static createMmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
