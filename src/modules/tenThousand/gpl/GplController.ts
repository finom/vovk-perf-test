import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpls")
export default class GplController {
  @operation({
    summary: "Get Gpls",
  })
  @get()
  static getGpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpl",
  })
  @post("{id}")
  static createGpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
