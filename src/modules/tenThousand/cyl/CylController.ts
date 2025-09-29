import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyls")
export default class CylController {
  @operation({
    summary: "Get Cyls",
  })
  @get()
  static getCyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyl",
  })
  @post("{id}")
  static createCyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
