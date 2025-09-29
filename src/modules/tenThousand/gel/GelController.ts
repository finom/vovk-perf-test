import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gels")
export default class GelController {
  @operation({
    summary: "Get Gels",
  })
  @get()
  static getGels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gel",
  })
  @post("{id}")
  static createGel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
