import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grws")
export default class GrwController {
  @operation({
    summary: "Get Grws",
  })
  @get()
  static getGrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grw",
  })
  @post("{id}")
  static createGrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
