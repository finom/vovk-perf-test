import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpks")
export default class BpkController {
  @operation({
    summary: "Get Bpks",
  })
  @get()
  static getBpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpk",
  })
  @post("{id}")
  static createBpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
