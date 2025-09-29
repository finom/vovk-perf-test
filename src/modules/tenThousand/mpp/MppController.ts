import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpps")
export default class MppController {
  @operation({
    summary: "Get Mpps",
  })
  @get()
  static getMpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpp",
  })
  @post("{id}")
  static createMpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
