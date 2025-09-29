import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddxes")
export default class DdxController {
  @operation({
    summary: "Get Ddxes",
  })
  @get()
  static getDdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddx",
  })
  @post("{id}")
  static createDdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
