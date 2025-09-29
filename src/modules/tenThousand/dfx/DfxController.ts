import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfxes")
export default class DfxController {
  @operation({
    summary: "Get Dfxes",
  })
  @get()
  static getDfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfx",
  })
  @post("{id}")
  static createDfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
