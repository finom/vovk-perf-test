import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvrs")
export default class MvrController {
  @operation({
    summary: "Get Mvrs",
  })
  @get()
  static getMvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvr",
  })
  @post("{id}")
  static createMvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
