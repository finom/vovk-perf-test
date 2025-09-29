import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("angs")
export default class AngController {
  @operation({
    summary: "Get Angs",
  })
  @get()
  static getAngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ang",
  })
  @post("{id}")
  static createAng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
