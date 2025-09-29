import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naks")
export default class NakController {
  @operation({
    summary: "Get Naks",
  })
  @get()
  static getNaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nak",
  })
  @post("{id}")
  static createNak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
