import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrws")
export default class MrwController {
  @operation({
    summary: "Get Mrws",
  })
  @get()
  static getMrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrw",
  })
  @post("{id}")
  static createMrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
