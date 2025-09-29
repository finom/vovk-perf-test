import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kebs")
export default class KebController {
  @operation({
    summary: "Get Kebs",
  })
  @get()
  static getKebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Keb",
  })
  @post("{id}")
  static createKeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
