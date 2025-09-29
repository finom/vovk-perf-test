import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvrs")
export default class FvrController {
  @operation({
    summary: "Get Fvrs",
  })
  @get()
  static getFvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvr",
  })
  @post("{id}")
  static createFvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
