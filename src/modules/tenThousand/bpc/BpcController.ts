import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpcs")
export default class BpcController {
  @operation({
    summary: "Get Bpcs",
  })
  @get()
  static getBpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpc",
  })
  @post("{id}")
  static createBpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
