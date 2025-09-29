import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("babs")
export default class BabController {
  @operation({
    summary: "Get Babs",
  })
  @get()
  static getBabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bab",
  })
  @post("{id}")
  static createBab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
