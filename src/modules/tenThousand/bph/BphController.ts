import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bphs")
export default class BphController {
  @operation({
    summary: "Get Bphs",
  })
  @get()
  static getBphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bph",
  })
  @post("{id}")
  static createBph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
