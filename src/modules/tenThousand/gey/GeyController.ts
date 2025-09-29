import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("geys")
export default class GeyController {
  @operation({
    summary: "Get Geys",
  })
  @get()
  static getGeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gey",
  })
  @post("{id}")
  static createGey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
