import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpgs")
export default class BpgController {
  @operation({
    summary: "Get Bpgs",
  })
  @get()
  static getBpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpg",
  })
  @post("{id}")
  static createBpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
