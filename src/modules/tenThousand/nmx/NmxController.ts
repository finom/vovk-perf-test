import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmxes")
export default class NmxController {
  @operation({
    summary: "Get Nmxes",
  })
  @get()
  static getNmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmx",
  })
  @post("{id}")
  static createNmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
