import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("decs")
export default class DecController {
  @operation({
    summary: "Get Decs",
  })
  @get()
  static getDecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dec",
  })
  @post("{id}")
  static createDec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
