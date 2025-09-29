import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpqs")
export default class BpqController {
  @operation({
    summary: "Get Bpqs",
  })
  @get()
  static getBpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpq",
  })
  @post("{id}")
  static createBpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
