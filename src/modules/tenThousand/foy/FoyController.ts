import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("foys")
export default class FoyController {
  @operation({
    summary: "Get Foys",
  })
  @get()
  static getFoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foy",
  })
  @post("{id}")
  static createFoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
