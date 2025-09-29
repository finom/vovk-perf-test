import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gffs")
export default class GffController {
  @operation({
    summary: "Get Gffs",
  })
  @get()
  static getGffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gff",
  })
  @post("{id}")
  static createGff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
