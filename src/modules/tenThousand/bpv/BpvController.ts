import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpvs")
export default class BpvController {
  @operation({
    summary: "Get Bpvs",
  })
  @get()
  static getBpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpv",
  })
  @post("{id}")
  static createBpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
