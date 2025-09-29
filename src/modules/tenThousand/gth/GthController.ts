import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gths")
export default class GthController {
  @operation({
    summary: "Get Gths",
  })
  @get()
  static getGths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gth",
  })
  @post("{id}")
  static createGth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
