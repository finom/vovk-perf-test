import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akls")
export default class AklController {
  @operation({
    summary: "Get Akls",
  })
  @get()
  static getAkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akl",
  })
  @post("{id}")
  static createAkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
