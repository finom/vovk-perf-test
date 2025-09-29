import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("debs")
export default class DebController {
  @operation({
    summary: "Get Debs",
  })
  @get()
  static getDebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Deb",
  })
  @post("{id}")
  static createDeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
