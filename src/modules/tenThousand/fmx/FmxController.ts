import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmxes")
export default class FmxController {
  @operation({
    summary: "Get Fmxes",
  })
  @get()
  static getFmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmx",
  })
  @post("{id}")
  static createFmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
