import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gacs")
export default class GacController {
  @operation({
    summary: "Get Gacs",
  })
  @get()
  static getGacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gac",
  })
  @post("{id}")
  static createGac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
