import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfls")
export default class MflController {
  @operation({
    summary: "Get Mfls",
  })
  @get()
  static getMfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfl",
  })
  @post("{id}")
  static createMfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
