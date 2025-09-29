import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmxes")
export default class LmxController {
  @operation({
    summary: "Get Lmxes",
  })
  @get()
  static getLmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmx",
  })
  @post("{id}")
  static createLmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
