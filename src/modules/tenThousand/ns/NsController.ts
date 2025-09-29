import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ns")
export default class NsController {
  @operation({
    summary: "Get Ns",
  })
  @get()
  static getNs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ns",
  })
  @post("{id}")
  static createNs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
