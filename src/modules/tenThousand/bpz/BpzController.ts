import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpzs")
export default class BpzController {
  @operation({
    summary: "Get Bpzs",
  })
  @get()
  static getBpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpz",
  })
  @post("{id}")
  static createBpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
