import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guses")
export default class GusController {
  @operation({
    summary: "Get Guses",
  })
  @get()
  static getGuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gus",
  })
  @post("{id}")
  static createGus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
