import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lums")
export default class LumController {
  @operation({
    summary: "Get Lums",
  })
  @get()
  static getLums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lum",
  })
  @post("{id}")
  static createLum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
