import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("affs")
export default class AffController {
  @operation({
    summary: "Get Affs",
  })
  @get()
  static getAffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aff",
  })
  @post("{id}")
  static createAff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
