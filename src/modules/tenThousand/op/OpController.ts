import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ops")
export default class OpController {
  @operation({
    summary: "Get Ops",
  })
  @get()
  static getOps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Op",
  })
  @post("{id}")
  static createOp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
