import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dabs")
export default class DabController {
  @operation({
    summary: "Get Dabs",
  })
  @get()
  static getDabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dab",
  })
  @post("{id}")
  static createDab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
