import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glus")
export default class GluController {
  @operation({
    summary: "Get Glus",
  })
  @get()
  static getGlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glu",
  })
  @post("{id}")
  static createGlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
