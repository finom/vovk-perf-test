import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fabs")
export default class FabController {
  @operation({
    summary: "Get Fabs",
  })
  @get()
  static getFabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fab",
  })
  @post("{id}")
  static createFab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
